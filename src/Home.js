import React from 'react';
import './App.css';
import Form from './Form'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
        MeNU
      </h1>
      <Link 
        to='/profile'
      >
        
        <button color ="purple">Build Your Profile</button>
        
      </Link>
    </div>
  );
};


export default Home;