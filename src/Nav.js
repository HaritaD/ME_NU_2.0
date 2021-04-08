import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
  return (
    <nav className = "-mt-5 p-6 mb-8 bg-purple-800 text-white">
     <ul className = "nav-links">
        <h1 className = "mb-4 text-5xl">meNU</h1>
         <Link className = "text-xl" to = "/"> 
            <li>Home</li>
         </Link>
         <Link className = "text-xl" to = "/profile"> 
            <li>Profile</li>
         </Link>
         <Link className = "text-xl" to = "/recommender"> 
            <li>Recommender</li>
         </Link>

     </ul>
    </nav>
  );
}

export default Nav;
