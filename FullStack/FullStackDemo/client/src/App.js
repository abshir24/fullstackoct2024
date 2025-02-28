import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<AddTodoForm />} exact />
  
      </Routes>
    </Router>
  );
}

export default App;
