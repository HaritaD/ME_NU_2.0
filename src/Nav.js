import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
  return (
<nav class="-mt-5 mb-8 bg-purple-900 text-white font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-72 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <a href="/home" class="text-4xl font-bold no-underline text-grey-darkest hover:text-blue-dark">meNU</a>
  </div>
  <div>
    <a href="/" class="text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</a>
    <a href="/profile" class="text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2">Profile</a>
    <a href="/recommender" class="text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2">Recommendation</a>
  </div>
</nav>
  );
}

export default Nav;
