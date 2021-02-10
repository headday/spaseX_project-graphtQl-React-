import React from 'react'

import Launches from './components/Launches'
import './App.css';
import logo from './logo.jpg'


function App() {
  return (
      <div className="App">
        <img className="logo" src={logo} alt="logo"/>
        <Launches/>
      </div>
    
  );
}

export default App;
