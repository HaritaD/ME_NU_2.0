import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import meNU from './meNU.png';

function Nav() {
  return (
<nav className="-mt-4 -mb-1 bg-white text-black font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-1 px-28 lg:px-72 bg-white shadow w-full">
  <a href="/"><img className = "flex items-center justify-center transform hover:scale-105 duration-300 ease-in-out" href="/home" src={meNU} alt="Logo" width="100" height="100"/></a>
  <div className = "flex items-center justify-center">
    <a href="/" className="px-1 text-lg font-semibold no-underline hover:text-underline text-grey-darkest hover:text-blue-dark ml-2 transform hover:scale-105 duration-300 ease-in-out">Home</a>
    <a href="/profile" className="px-1 text-lg font-semibold no-underline hover:text-underline text-grey-darkest hover:text-blue-dark ml-2 transform hover:scale-105 duration-300 ease-in-out">Profile</a>
    <a href="/recommender" className="px-1 text-lg font-semibold no-underline hover:text-underline text-grey-darkest hover:text-blue-dark ml-2 transform hover:scale-105 duration-300 ease-in-out">Recommendation</a>
  </div>
</nav>
  );
}

export default Nav;
