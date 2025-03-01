import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCourse, getCourses } from '../api/api'
import { Link } from 'react-router-dom';


function AddCourseForm(){
    const navigate = useNavigate()
    const [courses, setCourses] = useState(null)

    useEffect(() =>{
        const fetchCourses = async() =>{
            const response = await getCourses();

            setCourses(response.data)
        }

        fetchCourses()
    })
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        let name = e.target['name'].value
        let description = e.target['description'].value

        const response = await addCourse({name:name, description: description})

        setCourses(response.data)
    }

    if(courses == null ) return "No Courses"

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Add a new Course:</h1>

                <input type="text" placeholder='title' name ="name" />

                <input type="text" placeholder="description" name="description" />

                <button type="submit">Add</button>
            </form>

            <h1>Courses</h1>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Date Added</td>
                    <td>Action</td>
                </tr>

                {
                    courses.map(course=>(
                        <tr>
                            <td>{course.name}</td>
                            <td>{course.description}</td>
                            <td>{course.createdAt}</td>
                            <td><button onClick={ () => navigate(`/courses/${course._id}`)} >Remove</button></td>
                        </tr>
                    ))
                }
            </table>


        </div>
        
    )
}

export default AddCourseForm