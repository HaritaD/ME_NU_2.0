import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import meNU from './meNU.png';

function Nav() {
  return (
<nav className="mb-8 bg-white text-black font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-28 lg:px-72 bg-white shadow w-full">
  <img className = "flex items-center justify-center" href="/home" src={meNU} alt="Logo" width="100" height="100"/>
  <div className = "flex items-center justify-center">
    <a href="/Home" className="px-1 text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</a>
    <a href="/profile" className="px-1 text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2">Profile</a>
    <a href="/recommender" className="px-1 text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2">Recommendation</a>
  </div>
</nav>
  );
}

export default Nav;
