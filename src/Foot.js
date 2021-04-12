import React from 'react';
import './App.css';
import GitHub_Logo from './GitHub_Logo.png';

function Foot() {
  return (
<footer class="bg-white -mb-28 text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span class="ml-3 text-gray-500 text-xl">meNU</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 IE3 —
      <a class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Made with ♥ by our <a className="font-semibold text-purple-400" href="https://github.com/HaritaD/ME_NU_2.0" target="_blank">contributors</a></a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="ml-3 text-gray-500">
        <img src = {GitHub_Logo} width="50" height="50"></img>
      </a>
    </span>
  </div>
</footer>
  );
}

export default Foot;
