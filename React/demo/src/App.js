import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  const items = [
    { id: 1, name: "Pasta", description: "Pasta With red sauce" },
    { id: 2, name: "Pizza", description: "Veggie Pizza" },
    { id: 3, name: "Sandwich", description: "Peanut butter and Jelly" },
  ]

  return (
    <div>
      <Router>
       <Routes>
        <Route path="/" element ={ <Home items = {items} /> } />
        <Route path="/item/:id" element = { <Detail items = {items} /> } />
       </Routes>
      </Router>  
    </div>
  );
}

export default App;