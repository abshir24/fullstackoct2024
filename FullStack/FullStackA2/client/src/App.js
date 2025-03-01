import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCourseForm from './components/AddCourseForm';
import DeleteCourse from './components/DeleteCourse';
import { getCourses } from './api/api'

function App() {
  const [courses, setCourses] = useState(null)

  useEffect(() =>{
      const fetchCourses = async() =>{
        const response = await getCourses();

        setCourses(response.data)
      }

        fetchCourses()
  })
  
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<AddCourseForm />} exact />
        <Route path="/courses/:id" element = {<DeleteCourse courses = {courses} />} exact />
      </Routes>
    </Router>
  );
}

export default App;
