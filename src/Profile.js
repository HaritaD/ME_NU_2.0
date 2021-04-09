import React from 'react';
import './App.css';
import Dropdown,{prof} from './Dropdown';
import './Dropdown.scss';
import {GiHeartWings} from 'react-icons/gi';
import './Form';
import CsvDownload from 'react-json-to-csv'



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
    value: 60,
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


const Save = [{
  id: 1,
  value: prof,
}];


function Profile() {
  return (
    <div className = "px-64">
      <div className = "text-6xl font-bold">Profile</div>
      <div className="mb-4">
    <div className="container">
      <h1 className = "mt-3 font-semibold font-sans mb-2" style={{ textAlign: 'center' }}>
        Save Profile as CSV{' '}
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
    <div className = "px-5 grid grid-cols-2 gap-10">
    <div>

    <div horizontal layout> 
    <div className = "text-5xl font-semibold font-sans mb-6">Goals</div>
    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        Dining Hall{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred dining hall." items={DiningHall} Select />
    </div>
    </div>
    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        Diet{' '}
        <span role="img" aria-label="Movie projector">
        </span>
      </h1>
      <Dropdown title="Select your preferred diet." items={Diet} Select />
    </div>
    </div>

    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        Allergies{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your dietary restrictions." items={Allergies} multiSelect />
    </div>
    </div>

    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        Total Calories per Day{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred total calories per day." items={Calories} Select />
    </div>
    </div>
    </div>
    </div>

    <div>

    <div className="mb-4">
    <div className="container">
    <div className = "text-5xl font-semibold font-sans mb-6">Macros</div>
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        % Carbs{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred percentage of carbs." items={Carbs} Select />
    </div>
    </div>
    

    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        % Fats{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred percentage of fats." items={Fats} Select />
    </div>
    </div>

    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        % Protein{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred percentage of protein." items={Protein} Select />
    </div>
    </div>

    <div className="mb-4">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        Meals per Day{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred number of meals per day." items={NumSlots} Select />
    </div>
    </div>

    <div className="mb-12">
    <div className="container">
      <h1 className = "text-xl font-sans font-semibold mb-2" style={{ textAlign: 'center' }}>
        Items per Meal{' '}
        <span role="img" aria-label="Movie projector">
          
        </span>
      </h1>
      <Dropdown title="Select your preferred number of items per meal." items={NumItems} Select />
    </div>
    </div>

    </div>


    
    </div>
    </div>
    
  );
  
}

export default Profile;