import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import meNU from './meNU.png';

function Nav() {
  return (
<<<<<<< HEAD
    <nav className = "-mt-5 p-6 mb-8 bg-purple-900 text-white">
      <ul className = "nav-links">
        <h1 className = "mb-4 text-7xl font-bold">meNU</h1>
        <div class = "flex-container">
         <Link className = "text-2xl" to = "/"> 
            <li>Home</li>
         </Link>
         <Link className = "text-2xl" to = "/profile"> 
            <li>Profile</li>
         </Link>
         <Link className = "text-2xl" to = "/recommender"> 
            <li>Recommender</li>
         </Link>
         </div>
         </ul>
     
    </nav>
=======
<nav className="mb-5 bg-white text-black font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-1 px-28 lg:px-72 bg-white shadow w-full">
  <a href="/"><img className = "flex items-center justify-center transform hover:scale-105 duration-300 ease-in-out" href="/home" src={meNU} alt="Logo" width="100" height="100"/></a>
  <div className = "flex items-center justify-center">
    <a href="/" className="px-1 text-lg font-semibold no-underline hover:text-underline text-grey-darkest hover:text-blue-dark ml-2 transform hover:scale-105 duration-300 ease-in-out">Home</a>
    <a href="/profile" className="px-1 text-lg font-semibold no-underline hover:text-underline text-grey-darkest hover:text-blue-dark ml-2 transform hover:scale-105 duration-300 ease-in-out">Profile</a>
    <a href="/recommender" className="px-1 text-lg font-semibold no-underline hover:text-underline text-grey-darkest hover:text-blue-dark ml-2 transform hover:scale-105 duration-300 ease-in-out">Recommendation</a>
  </div>
</nav>
>>>>>>> 8bf731224ca1acdef94c479e0e1dea0fc084cc3c
  );
}

export default Nav;
