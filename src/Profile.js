import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import './Dropdown.scss';
import {GiHeartWings} from 'react-icons/gi'


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

function Profile() {
  return (
    <div horizonatl layout> 
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Diet{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      <Dropdown title="Diet" items={dietitems} Select />
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Allergies{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      <Dropdown title="Allergies" items={dietitems} multiSelect />
    </div>
    </div>
    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Buy Movies{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      <Dropdown title="Select movie" items={dietitems} multiSelect />
    </div>
    </div>
    </div>
  );
}

export default Profile;