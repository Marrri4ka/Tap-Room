import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import KegList from './components/KegList';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/allkegs' component ={KegList}/>
      </Switch>
        <Home/>
    </div>

  );
}

export default App;
