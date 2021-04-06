import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import './Dropdown.scss';
import {GiHeartWings} from 'react-icons/gi';
import './Form';


const Diet = [
  {
    id: 1,
    value: 'None',
  },
  {
    id: 2,
    value: 'Vegetarian',
  },
  {
    id: 3,
    value: 'Balanced',
  },
  {
    id: 4,
    value: 'Avoiding Gluten',
  },
  {
    id: 5,
    value: 'Vegan',
  },
];
const Allergies = [
  {
    id: 1,
    value: 'Dairy',
  },
  {
    id: 2,
    value: 'Nuts',
  },
  {
    id: 3,
    value: 'Shellfish',
  },
  {
    id: 4,
    value: 'Eggs',
  },
  {
    id: 5,
    value: 'Soy',
  },
];
const DiningHall = [
  {
    id: 1,
    value: 'Allison',
  },
  {
    id: 2,
    value: 'Sargent',
  },
  {
    id: 3,
    value: 'Elder',
  },
  {
    id: 4,
    value: 'Foster Walker',
  },
]
  const NumSlots = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,

    },
    {
      id: 5,
      value: 5,
      
    },
  
];
const NumItems = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,

  },
  {
    id: 5,
    value: 5,
    
  },

];
const Carbs = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
  {
    id: 4,
    value: 40,

  },
  {
    id: 5,
    value: 50,
    
  },
  {
    id: 6,
    value: 70,
  },
  {
    id: 7,
    value: 70,
  },
  {
    id: 8,
    value: 80,
  },
  {
    id: 9,
    value: 90,

  },
  {
    id: 10,
    value: 100,
    
  },

];
const Fats = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
  {
    id: 4,
    value: 40,

  },
  {
    id: 5,
    value: 50,
    
  },
  {
    id: 6,
    value: 70,
  },
  {
    id: 7,
    value: 70,
  },
  {
    id: 8,
    value: 80,
  },
  {
    id: 9,
    value: 90,

  },
  {
    id: 10,
    value: 100,
    
  },

];

const Protein = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
  {
    id: 4,
    value: 40,

  },
  {
    id: 5,
    value: 50,
    
  },
  {
    id: 6,
    value: 70,
  },
  {
    id: 7,
    value: 70,
  },
  {
    id: 8,
    value: 80,
  },
  {
    id: 9,
    value: 90,

  },
  {
    id: 10,
    value: 100,
    
  },

];

const Calories = [
  {
    id: 1,
    value: 1000,
  },
  {
    id: 2,
    value: 1200,
  },
  {
    id: 3,
    value: 1400,
  },
  {
    id: 4,
    value: 1600,

  },
  {
    id: 5,
    value: 1800,
    
  },
  {
    id: 6,
    value: 2000,
  },
  {
    id: 7,
    value: 2200,
  },
  {
    id: 8,
    value: 2400,
  },
  {
    id: 9,
    value: 2600,

  },
  {
    id: 10,
    value: 2800,
    
  },
  {
    id: 11,
    value: 3200,
    
  },

];


function Profile() {
  return (
    <div horizonatl layout> 
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Dining Hall{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred dining hall." items={DiningHall} Select />
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Diet{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred diet." items={Diet} multiSelect />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Allergies{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your dietary restrictions." items={Allergies} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Total Calories per Day{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select preferred total calories per day." items={Calories} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        % Carbs{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select preferred percentage of carbs." items={Carbs} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        % Fats{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select preferred percentage of fats." items={Fats} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        % Protein{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select preferred percentage of protein." items={Protein} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Meals per Day{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select preferred number of meals per day." items={NumSlots} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Items per Meal{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select preferred number of items per meal." items={NumItems} Select />
    </div>
    </div>

    </div>
    
  );
}

export default Profile;