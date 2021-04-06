import React from 'react';
import './App.css';
import Dropdown,{prof} from './Dropdown';
import './Dropdown.scss';
import {GiHeartWings} from 'react-icons/gi';
import './Form';
import CsvDownload from 'react-json-to-csv';



const Diet = [
  {
    value: 'None',
  },
  {
    value: 'Vegetarian',
  },
  {
    value: 'Balanced',
  },
  {
    value: 'Avoiding Gluten',
  },
  {
    value: 'Vegan',
  },
];
const Allergies = [
  {
    value: 'Dairy',
  },
  {
    value: 'Nuts',
  },
  {
    value: 'Shellfish',
  },
  {
    value: 'Eggs',
  },
  {
    value: 'Soy',
  },
];
const DiningHall = [
  {
    value: 'Allison',
  },
  {
    value: 'Sargent',
  },
  {
    value: 'Elder',
  },
  {
    value: 'Foster Walker',
  },
]
  const NumSlots = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  
];
const NumItems = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,

  },
  {
    value: 5,
    
  },

];
const Carbs = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,

  },
  {
    value: 50,
    
  },
  {
    value: 70,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,

  },
  {
    value: 100,
    
  },

];
const Fats = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,

  },
  {
    value: 50,
    
  },
  {
    value: 70,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,

  },
  {
    value: 100,
    
  },

];

const Protein = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,

  },
  {
    value: 50,
    
  },
  {
    value: 70,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,

  },
  {
    value: 100,
    
  },

];

const Calories = [
  {
    value: 1000,
  },
  {
    value: 1200,
  },
  {

    value: 1400,
  },
  {
    value: 1600,

  },
  {
    value: 1800,
    
  },
  {
    value: 2000,
  },
  {
    value: 2200,
  },
  {
    value: 2400,
  },
  {
    value: 2600,

  },
  {
    value: 2800,
    
  },
  {
    value: 3200,
    
  },

];


const Save = [
  {
    value: {prof},
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
      <Dropdown title="Select your preferred diet." items={Diet} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Allergies{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your dietary restrictions." items={Allergies} multiSelect />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Total Calories per Day{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred total calories per day." items={Calories} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        % Carbs{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred percentage of carbs." items={Carbs} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        % Fats{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred percentage of fats." items={Fats} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        % Protein{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred percentage of protein." items={Protein} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Meals per Day{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred number of meals per day." items={NumSlots} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Items per Meal{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred number of items per meal." items={NumItems} Select />
    </div>
    </div>

    <div>
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Save{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <CsvDownload 
    data={Save}
    filename="good_data.csv"
    style={{ //pass other props, like styles
      boxShadow:"inset 0px 1px 0px 0px #000000",
      background:"linear-gradient(to bottom, #000000 5%, #000000 100%)",
      backgroundColor:"#000000",
      borderRadius:"6px",
      border:"1px solid #000000",
      display:"inline-block",
      cursor:"pointer","color":"#ffffff",
      fontSize:"15px",
      fontWeight:"bold",
      padding:"6px 24px",
      textDecoration:"none",
      textShadow:"0px 1px 0px #000000"
      }}
  >
    Download
  </CsvDownload>
    </div>
    </div>

    </div>
    
  );
}

export default Profile;