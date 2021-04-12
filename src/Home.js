import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import meNU from './meNU.png';

const Home = () => {
  return (
    <div className='text-white bg-dining h-screen flex flex-col justify-center items-center'>
      <h1 className='-mt-36 lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-4'>
        MeNU
      </h1>
      <Link to='/profile'>
        <button className = "p-4 shadow-md font-semibold border-white rounded-xl border-2 transform hover:scale-105 duration-300 ease-in-out hover:bg-purple-900" >
          Build Your Profile</button>
      </Link>
    </div>
  );
};


export default Home;