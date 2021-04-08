import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './Nav';
import Profile from './Profile';
import Recommender from './Recommender';
import Home from './Home';
import Dropdown from './Dropdown';
import './Dropdown.scss';
import selection from './Dropdown';
import Foot from './Foot';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/profile" component = {Profile}/>
      <Route path = "/recommender" component = {Recommender}/>
      </Switch>
      <Foot/>
    </div>
    </Router>
    
  );
}


export default App;
