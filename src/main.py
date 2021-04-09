import numpy as np
from sklearn.cluster import KMeans
from scipy.optimize import nnls
import time
from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

names = {"tim": {"age": 23, "gender": "male"},
        "bill": {"age": 27, "gender": "female"}}


class HelloWorld(Resource):
    def get(self, name, test):
        return names[name]

api.add_resource(HelloWorld, "/helloworld/<string:name>/<int:test>")

if __name__ == "__main__":
    app.run(debug=True)

class Consumer:
    '''A consumer instance will store the user's dietary restrictions, macro goals as a percentage of their calorie
       intake, number of meals they would like per day, and the number of items they want on each plate suggestion'''

    def __init__(self, limits, goals, n_sugg, n_items):
        # limits is a list of user avoidances (e.g. allergies, gluten-free)
        # goals is an array of the following format: [total_calories, %protein, %carbs, %fat]
        # n_sugg is the number of meal suggestions the user requires per day
        # n_items is the total number of items a user wants on their plate for each suggestion
        self.restrictions = limits
        # turn percentages into specific totals
        goals[1:] = goals[1:] * goals[0]
        goals[1:3] = goals[1:3]/4  # protein and carbs are 4 calories per gram
        goals[3] = goals[3]/9  # fat has 9 calories per gram
        self.daily_goals = goals
        self.num_suggestions = n_sugg
        self.num_items = n_items
        # The following two fields should be set to 0 at the start of each day
        # stores user's current totals from previous suggestions in the day
        self.curr_totals = np.zeros(4, dtype=int)
        self.curr_suggestions = 0  # total number of suggestions taken so far

    def get_curr_totals(self):  # basic accessor
        return self.curr_totals

    def generate_plate(self, contents, food_names):
        # contents is the total list of meal contents from the dining hall of choice. It is an Nx4 ndarray,
        # where each row n={0,1,...,N-1} consists of [calories, protein, carbs, fat] (each measured per single serving)
        # food_names is the list of meal names. It is a 1xN ndarray, where each index n={0,1,...,N-1} gives the food
        # at the same row position in contents.
        # Outputs names of best foods, along with the number of servings of each food and the meal's total content

        # Calculate targets for the suggestion to be provided by this meal
        goals = (self.daily_goals - self.curr_totals) / \
            (self.num_suggestions - self.curr_suggestions)

        # Filter out meals that contradict dietary restrictions
        values, names = self._filter(contents, food_names)

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
            group_contents.append(contents[idx == i])
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
            w, _ = nnls(plate, new_goals)
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

    def _filter(self, contents, food_names):
        # Helper function that excludes foods that shouldn't be considered as per user's dietary restrictions
        # Returns list of contents/names for valid foods
        if(self.restrictions == None):
            return contents, food_names
        else:
            # Change this line later
            return None, None


food_names = ["brazilian stew",
              "florentine",
              "wedges",
              "squash",
              "shrooms",
              "chicken",
              "rice",
              "kale",
              "salad",
              "melon",
              "rat",
              "couscous",
              "broccolini",
              "meatball sub",
              "rosemary mushrooms",
              "fries"]

#user_goals = [calories, carbs, fats, protein]
user_goals = [1600, 0.25, 0.50, 0.25]
values = [[450, 29, 9, 34],
          [230, 8, 32, 9],
          [150, 3, 23, 6],
          [50, 2, 5, 3],
          [70, 4, 4, 5],
          [520, 51, 2, 33],
          [110, 2, 19, 2.5],
          [30, 2, 5, 1],
          [160, 5, 22, 6],
          [30, 1, 8, 0],
          [90, 3, 12, 4],
          [190, 6, 40, 0],
          [70, 4, 10, 2.5],
          [290, 28, 26, 9],
          [25, 2, 3, 1],
          [180, 2, 21, 10]]
food_names = np.array(food_names)
user_goals = np.array(user_goals)
values = np.array(values)
Kyle = Consumer(None, user_goals, 3, 3)
curr_time = time.time()
names, servings, sums = Kyle.generate_plate(values, food_names)
print(names)
print(servings)
print(Kyle.get_curr_totals())
print(time.time() - curr_time)
