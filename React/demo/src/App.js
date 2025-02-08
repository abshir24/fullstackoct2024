import './App.css';
import React, { useState, useEffect } from 'react';
import ComponentWithProps from './components/ComponentWithProps'
import EventHandler from './components/EventListener';
import ListRenderer from './components/ListRenderer';
import Timer from './components/Timer';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import avatar from './avatar.jpeg'
import TodoList from './components/TodoList';

function Home(){
  return <h1>Home</h1>
}

function App() {
  return (
    <div>
      <TodoList />
      {/* <UserProfile name={"Username"} bio={"This is the bio"} avatarUrl = {avatar} /> */}
    </div>
  );
}

export default App;

 // <Router>
    //   <Routes>
    //     <Route path='/component' element ={<ComponentWithProps/>} />
    //     <Route path='/home' element ={<Home/>} />
    //   </Routes>
    // </Router>  