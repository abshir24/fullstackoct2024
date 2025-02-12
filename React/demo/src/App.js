import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
       <Routes>
        <Route path='/login' element ={<Login />} />
        <Route path='/dashboard/:username' element ={<Dashboard />} />
       </Routes>
      </Router>  
    </div>
  );
}

export default App;