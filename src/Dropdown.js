import React, { useState } from 'react';
/*import onClickOutside from 'react-onclickoutside';*/

var profile = {
  'diet': 'None',
  'allergies': [],
  'macros': [],
  'calories': 0,
  'meals': 0,
  'items': 0,
  'hall': 'N/A'
}

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  if (title === 'Diet') {
    profile.diet = selection
  } else if (title === 'Allergies') {
    profile.allergies = selection
  } else if (title === 'Macros') {
    profile.macros = selection
  } else if (title === 'Calories') {
    profile.calories = selection
  } else if (title === 'Meals') {
    profile.meals = selection
  } else if (title === 'Items') {
    profile.items = selection
  } else if (title === 'Hall') {
    profile.hall = selection
  } else {
    // do nothing
  }

  console.log(profile)

  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

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
          <p className='dd-header__title--bold'>{title}</p>
        </div>
        <div className='dd-header__action'>
          <p>{open ? 'Close' : 'Open'}</p>
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
export default Dropdown