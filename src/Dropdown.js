import React, { useState } from 'react';
import CsvDownload from 'react-json-to-csv';
/*import onClickOutside from 'react-onclickoutside';*/


export var prof = {
  'hall': 'None',
  'diet': 'None',
  'allergies': [],
  'calories': 0,
  'carbs': 0,
  'fats': 0,
  'protein': 0,
  'meals': 0,
  'items': 0,
}

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(true);
  const [selection, setSelection] = useState([]);
  if (title === 'Select your preferred dining hall.') {
    prof.hall = selection
  } else if (title === 'Select your preferred diet.') {
    prof.diet = selection
  } else if (title === 'Select your dietary restrictions.') {
    prof.allergies = selection
  } else if (title === 'Select your preferred total calories per day.') {
    prof.calories = selection
  } else if (title === 'Select your preferred percentage of carbs.') {
    prof.carbs = selection
  } else if (title === 'Select your preferred percentage of fats.') {
    prof.fats = selection
  } else if (title === 'Select your preferred percentage of protein.') {
    prof.protein = selection
  } else if (title === 'Select your preferred number of meals per day.') {
    prof.meals = selection
  } else if (title === 'Select your preferred number of items per meal.') {
    prof.items = selection
  } else {
    //do nothing
  }

  console.log(prof)

  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(true);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className='dd-wrapper'>
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className='dd-header__title'>
          <p className='text-xl font-semibold font-sans mt-3'>{title}</p>
        </div>
        <div className='dd-header__action mt-5'>
          <p className='mb-4'>{open ? '▲' : '▼'}</p>
        </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {items.map(item => (
            <li className='dd-list-item' key={item.id}>
              <button type='button' onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
/*
const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);*/
export default Dropdown;
