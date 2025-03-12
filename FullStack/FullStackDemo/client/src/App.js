import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AddTodoForm from './components/AddTodoForm';
// import EditTodoForm from './components/EditTodoForm';
import { testFlaskServer } from './api/api';

function App() {
  
  useEffect(() => {
    const testServer = async () =>{
      const response = await testFlaskServer()
      console.log("Response from flask Server", response.data)
    }
    
    testServer()
  },[])
  
  return (
    <h1>Hello World</h1>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element = {<AddTodoForm />} exact />
    //     <Route path="/edit/:id" element = {<EditTodoForm />} exact /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
