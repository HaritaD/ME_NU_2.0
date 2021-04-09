import React from 'react';
import './App.css';
import Form from './Form'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <h1 className='-mt-36 lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-4'>
        MeNU
      </h1>
      <Link 
        to='/profile'
      >
        <button className = "p-4 shadow-md font-semibold border-black rounded-xl border-2 transform hover:scale-105 duration-300 ease-in-out" >Build Your Profile</button>
        
        
      </Link>
    </div>
  );
};


export default Home;