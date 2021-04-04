import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import './Dropdown.scss';
import {GiHeartWings} from 'react-icons/gi';
import './Form';


const dietitems = [
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
const allergies = [
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

function Profile() {
  return (
    <div horizonatl layout> 
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Diet{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
<<<<<<< HEAD
      <Dropdown title="Select Diet" items={dietitems} multiSelect />
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Allergies{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select Allergies" items={allergies} multiSelect />
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Dining Hall{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select Dining Hall" items={DiningHall} Select />
=======
      <Dropdown title="Diet" items={dietitems} Select />
>>>>>>> bdde2a2456448caa2a485101fb83f1af159cc0cd
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
<<<<<<< HEAD
        Number of Meals{' '}
=======
        Allergies{' '}
>>>>>>> bdde2a2456448caa2a485101fb83f1af159cc0cd
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
<<<<<<< HEAD
      <Dropdown title="Select Preferred # of Meals" items={NumSlots} Select />
=======
      <Dropdown title="Allergies" items={dietitems} multiSelect />
>>>>>>> bdde2a2456448caa2a485101fb83f1af159cc0cd
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Number of Items{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select Preferred # of Items/Meal" items={NumItems} Select />
    </div>
    </div>
    </div>
  );
}

export default Profile;