import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './CRUD/HomePage'
import Controller from './CRUD/Controller';
import './App.css';
import HomePage from './CRUD/HomePage';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" Component={HomePage}/>
          <Route path="/list" Component={Controller}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
