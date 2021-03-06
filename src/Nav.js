import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import meNU from './meNU.png';

function Nav() {
  return (
  <header className="px-5 border-b-4 border-purple-900 bg-white text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      <nav className="flex text-lg lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a href="/" className="mr-5 hover:text-gray-900">Home</a>
        <a href="/profile" className="mr-5 hover:text-gray-900">Profile</a>
        <a href="/recommender" className="mr-5 hover:text-gray-900">Recommender</a>
      </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img className = "flex items-center justify-center transform hover:scale-105 duration-300 ease-in-out" href="/home" src={meNU} alt="Logo" width="125" height="125"/>
      </a>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <a href="https://dineoncampus.com/northwestern" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">To Dine On Campus
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </header>
  );
}

export default Nav;
