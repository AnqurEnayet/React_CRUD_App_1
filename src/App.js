import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './CRUD/HomePage'
import Controller from './CRUD/Controller';
import { Link, Typography, CssBaseline, Container, Box, Button } from '@mui/material';
//import './App.css';
import HomePage from './CRUD/HomePage';

function App() {
  return (
    <Container maxWidth='sm' sx={{padding: '50px'}}> 
      <Box sx={{ padding: '10px', bgcolor: 'white', height: '100%', border: '2px solid #BB1414'}}>
            <Router>
              <Routes>
                <Route exact path="/" Component={HomePage}/>
                <Route path="/list" Component={Controller}/>
              </Routes>
            </Router>
      </Box>    
    </Container>
    
    
  );
}

export default App;
