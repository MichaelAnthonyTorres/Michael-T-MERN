import React from 'react'
import { Router } from '@reach/router';
import Hello from "./components/Hello";
import Home from "./components/Home";
import Color from "./components/Color";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Hello path="/:str"/>
        <Color path="/:str/:color/:background"/>
      </Router>
    </div>
  )
}

export default App;
