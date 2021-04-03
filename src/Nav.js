import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav >
     <ul className = "nav-links">
         <Link style = {navStyle} to = "/"> 
            <li>Home</li>
         </Link>
         <Link style = {navStyle} to = "/profile"> 
            <li>Profile</li>
         </Link>
         <Link style = {navStyle} to = "/recommender"> 
            <li>Recommender</li>
         </Link>

     </ul>
    </nav>
  );
}

export default Nav;
