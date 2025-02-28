import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodoForm from './components/AddTodoForm';
import EditTodoForm from './components/EditTodoForm';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<AddTodoForm />} exact />
        <Route path="/edit/:id" element = {<EditTodoForm />} exact />
      </Routes>
    </Router>
  );
}

export default App;
