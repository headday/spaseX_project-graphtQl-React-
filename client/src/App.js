import React from 'react'
import {Route} from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css';
import logo from './logo.jpg'


function App() {
  return (
    
      <div className="container">
        <img className="logo" src={logo} alt="logo"/>
        <Launches/>
        <Route exact path="/" component={Launches}/>
        <Route path="/launch/:flight_number" component={Launch}/>
      </div>
    
  );
}

export default App;
