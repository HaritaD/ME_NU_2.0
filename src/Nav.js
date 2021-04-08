import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
  return (
    <nav className = "-mt-5 p-6 mb-8 bg-purple-900 text-white">
     <ul className = "nav-links">
        <h1 className = "mb-4 text-7xl font-bold">meNU</h1>
         <Link className = "text-2xl" to = "/"> 
            <li>Home</li>
         </Link>
         <Link className = "text-2xl" to = "/profile"> 
            <li>Profile</li>
         </Link>
         <Link className = "text-2xl" to = "/recommender"> 
            <li>Recommender</li>
         </Link>

     </ul>
    </nav>
  );
}

export default Nav;
