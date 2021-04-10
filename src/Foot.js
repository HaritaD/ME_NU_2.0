import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';

function Foot() {
  return (
    <nav className = "p-3 bg-purple-500 text-white">
        <h1 className = "text-md">meNU 2021 | Made with ♥ by our <a class="text-yellow-300" href="https://github.com/HaritaD/ME_NU_2.0" target="_blank">contributors</a>.</h1>
    </nav>
  );
}

export default Foot;
