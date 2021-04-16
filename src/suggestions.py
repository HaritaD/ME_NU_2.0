import numpy as np
from sklearn.cluster import KMeans
from scipy.optimize import nnls
import time
import csv
import json

def parser(filename):
    # Reads from a csv file with a json array and outputs the user's dining hall and goals.
    with open(filename) as file:
        csv_reader = csv.reader(file, delimiter = '\n')
        next(csv_reader)
        json_array = next(csv_reader)[0][2:]

    #extracting user profile
    profile = json.loads(json_array)

    #extracting dining hall
    dining_hall = profile['hall'][0]['value']

    #extracting calorie & macronutrient info to create a goals array
    calories = profile['calories'][0]['value']
    protein = profile['protein'][0]['value']
    carbs = profile['carbs'][0]['value']
    fats = profile['fats'][0]['value']
    goals = [calories, protein, carbs, fats]

    return dining_hall, goals

parser('/USERS/sinth/Downloads/good_data.csv')


def read_csv(dining_hall):
    # Reads from a csv file and outputs two np.ndarrays: foods, and contents. Inputs to the function should be one of
    # "allsion", "sargent", "plexw", or "elder". The foods nparray contains rows of strings: {Meal Time, Food Name}
    # The contents nparray contains rows of integers: {Calories, Protein, Carbs, Fat}
    foods = []  # create empty list
    contents = []  # create empty list
    filename = "/Users/sinth/VSCode/ME_NU_2.0/src/CSVs/" + dining_hall + ".csv"  # filepath
    # The data in each csv is stored in the following order:
    # Meal Time (str), Food Name (str), Calories, Protein, Carbs, Fats (all ints), Ingredients (str)
    with open(filename, 'r') as csvfile:
        csvreader = csv.reader(csvfile)
        next(csvreader)  # skip header
        for row in csvreader:
            foods.append(row[0:2])
            contents.append(row[2:-1])
            # Ingredients will be unstored for now
    # convert lists to nparrays upon returning
    return np.array(foods), np.array(contents).astype(int)


class Consumer:
    '''A consumer instance will store the user's dietary restrictions, macro goals as a percentage of their calorie
       intake, number of meals they would like per day, and the number of items they want on each plate suggestion'''

    def __init__(self, goals, limits=None, n_sugg=3, n_items=3):
        '''Until we're able to incorporate more variability, a Consumer must only be instantiated with their goals
           array known. Ex: Kyle = Consumer(np.array([1600, 0.25, 0.50, 0.25]))'''
        # goals is an array of the following format: [total_calories, %protein, %carbs, %fat]
        # limits is a list of user avoidances (e.g. allergies, gluten-free), None by default
        # n_sugg is the number of meal suggestions the user requires per day, 3 by default
        # n_items is the total number of items a user wants on their plate for each suggestion, 3 by default
        self.restrictions = limits
        # turn percentages into specific totals
        goals[1:] = goals[1:] * goals[0]
        goals[1:3] = goals[1:3]/4  # protein and carbs are 4 calories per gram
        goals[3] = goals[3]/9  # fat has 9 calories per gram
        self.daily_goals = np.array(goals)
        self.num_suggestions = n_sugg
        self.num_items = n_items
        # The following two fields should be set to 0 at the start of each day
        # stores user's current totals from previous suggestions in the day
        self.curr_totals = np.zeros(4, dtype=int)
        self.curr_suggestions = 0  # total number of suggestions taken so far

    def _generate_plate(self, contents, foods, prior_suggestions):
        # contents is the total list of meal contents from the dining hall of choice. It is an Nx4 ndarray,
        # where each row n={0,1,...,N-1} consists of [calories, protein, carbs, fat] (each measured per single serving)
        # food_names is the list of meal names. It is a Nx2 ndarray, where each index n={0,1,...,N-1} gives the food
        # time and food name at the same row position in contents.
        # Outputs names of best foods, along with the number of servings of each food and the meal's total content

        # Calculate targets for the suggestion to be provided by this meal
        goals = (self.daily_goals - self.curr_totals) / \
            (self.num_suggestions - self.curr_suggestions)

        if(self.curr_suggestions == 0):
            time = "Breakfast"
        elif(self.curr_suggestions == 1):
            time = "Lunch"
        elif(self.curr_suggestions == 2):
            time = "Dinner"

        # Filter out meals that contradict dietary restrictions
        values, names = self._filter(contents, foods, time, prior_suggestions)

        # Check edge case in which only three or fewer foods are available before using KMeans
        if(len(names) <= 3):
            # Find and return optimal combination of the few foods available
            plate = np.ndarray((len(names), 4))
            for i in range(len(names)):  # build plate with available foods
                plate[i] = values[i]
            plate = plate.T  # transposed version of plate is used from here on out, so store it as such
            sums = np.sum(plate, 1)
            new_goals = goals - sums  # force at least one serving of each food
            # w now stores how many extra servings of each food are needed
            w, _ = nnls(plate, new_goals)
            # round weights to integers and add 1 to store total number of servings of each food
            w = np.around(w) + 1
            sums = np.dot(plate, w)
            return names, w, sums

        # normalize macro contents of each food by their calorie contents
        vals = [np.divide(values[i][1:4], values[i][0])
                for i in range(len(values))]

        # gets cluster each meal belongs to in a 1xN output vector
        idx = KMeans(n_clusters=self.num_items).fit(vals).labels_

        # Place each food in its corresponding KMeans group and tally number of foods in each group
        group_contents = []
        group_names = []
        totals = []
        for i in range(self.num_items):
            group_contents.append(values[idx == i])
            group_names.append(names[idx == i])
            totals.append(len(group_names[i]))

        # Now, combine foods from each group and find the optimal plate
        # gives distance from plate's totals to user's goals, should be inf to start to run properly
        distance = np.inf
        # threshold for how large a plate can be (we don't want obnoxious serving sizes). The +1 should be tweaked for performance later
        threshold = self.num_items + 1
        # stores information about the best combination of foods
        best_combo = np.zeros(self.num_items, dtype=int)
        best_weights = np.zeros(self.num_items)
        best_sums = np.zeros(4)
        # Controls the loop
        indices = np.zeros(len(totals), dtype=int)

        for n in range(int(np.prod(totals))):  # iterate over all combos to find the best
            plate = np.ndarray((self.num_items, 4))
            for i in range(self.num_items):  # build plate with one item from each group
                group = group_contents[i]
                plate[i] = group[indices[i]]
            plate = plate.T  # transposed version of plate is used from here on out, so store it as such
            sums = np.sum(plate, 1)
            new_goals = goals - sums  # force at least one serving of each food
            # w now stores how many extra servings of each food are needed
            try:
                w, _ = nnls(plate, new_goals)
            except RuntimeError():
                continue
            # round weights to integers and add 1 to store total number of servings of each food
            w = np.around(w) + 1
            plate_sum = np.dot(plate, w)
            if(np.linalg.norm(plate_sum-goals) < distance and np.sum(w) <= threshold):
                # have to make a copy of indices array since we update it next
                best_combo = [i for i in indices]
                best_weights = w
                best_sums = plate_sum
                distance = np.linalg.norm(plate_sum-goals)
            # update indices array for next iteration of loop
            indices[-1] = indices[-1] + 1
            for i in range(len(totals)):
                if(indices[-1*(1+i)] >= totals[-1*(1+i)]):
                    if(i == len(totals) - 1):
                        indices[0] = indices[0] + 1
                        indices[1:] = np.zeros(len(totals)-1, dtype=int)
                    else:
                        indices[-1*(1+i)] = 0
                        indices[-1*(2+i)] = indices[-1*(2+i)] + 1

        # Update user parameters
        self.curr_suggestions = self.curr_suggestions + 1
        if(self.curr_suggestions == self.num_suggestions):
            # If all suggestions for day have been given, reset for next day
            self.curr_suggestions = 0
            self.curr_totals = np.zeros(4, dtype=int)
        else:
            self.curr_totals = self.curr_totals + best_sums

        # Output optimal plate
        best_names = []
        for i in range(self.num_items):
            best_names.append(group_names[i][best_combo[i]])
        return best_names, best_weights, best_sums

    def _filter(self, contents, foods, meal_time, prior_suggestions):
        # Helper function that excludes foods that shouldn't be considered as per user's dietary restrictions
        # Returns list of contents/names for valid foods
        if(self.restrictions == None):
            conts = []
            meals = []
            for i, food_pair in enumerate(foods):
                if(food_pair[0] == meal_time):
                    # Skip if food has already been suggested that day
                    if((len(list(filter(lambda x: x == food_pair[1], prior_suggestions)))) > 0):
                        continue
                    # Filter out small foods from salad bar suggestions (better way to do this?)
                    sum = 0
                    for j in range(1, 4):
                        if(contents[i][j] > 5):
                            sum = sum + 1
                    if(sum < 2):
                        continue
                    else:
                        conts.append(contents[i])
                        meals.append(food_pair[1])
            return np.array(conts), np.array(meals)
        else:
            return None, None  # fill this out later if we have time

    def generate_day(self, dining_hall):
        # Generates all the user's meals for the day. Since we're restricting to 3 meals for now, some things will be
        # hard-coded to reflect this. Assumption is that all three meals will be from the same hall.
        food_names, food_contents = read_csv(dining_hall)
        plates = [None]*9
        servings = np.empty(9)
        contents = np.empty(12)
        for i in range(3):
            plates[(3*i):(3+(3*i))], servings[(3*i):(3+(3*i))], contents[(4*i):(4+(4*i))] = self._generate_plate(
                food_contents, food_names, plates)
        return plates, servings, contents


def output_to_json(filename, names, servings, sums):
    # Takes in all the data regarding a user's meals for the day and writes them into the given json file.
    profile = {
        'b_foods': [names[i] for i in range(3)],
        'b_servings': [servings[i] for i in range(3)],
        'b_sums': [sums[i] for i in range(4)],
        
        'l_foods': [names[i] for i in range(3, 6)],
        'l_servings': [servings[i] for i in range(3, 6)],
        'l_sums': [sums[i] for i in range(4, 8)],
        
        'd_foods': [names[i] for i in range(6, 9)],
        'd_servings': [servings[i] for i in range(6, 9)],
        'd_sums': [sums[i] for i in range(8, 12)],
        'd_hall':  parser('/USERS/sinth/Downloads/good_data.csv')[0]}
        
    with open(filename, "w") as f:
        json.dump(profile, f)

dining_hall, goals = parser('/USERS/sinth/Downloads/good_data.csv')
cal = goals[0]
protein = goals[1]/100
carbs = goals[2]/100
fats = goals[3]/100
array = [cal,protein,carbs,fats]
print(dining_hall)
print(array)
# Example usage
Kyle = Consumer(np.array(array))
curr_time = time.time()
plates, servings, contents = Kyle.generate_day(dining_hall)
print(time.time() - curr_time)
print(plates)
print(servings)
print(contents)
output_to_json('/Users/sinth/VSCode/ME_NU_2.0/src/waffle.json', plates, servings, contents)

