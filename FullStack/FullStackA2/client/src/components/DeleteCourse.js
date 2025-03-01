import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { deleteCourse } from '../api/api'

function DeleteCourse(props){
    const [course, setCourse] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        let course = props.courses.find( (course) => course._id === params.id ) 
        console.log(course)
        setCourse(course)
    },[props.courses, params.id])

    const removeCourse = async ()=>{
        
        await deleteCourse(params.id)
        
        navigate('/')
    }

    if(course == null) return "<h1> No Courses </h1>"

    return <div>
        <h1>Are you sure you want to delete the following course:</h1>

        <h3>Name: {course.name}</h3>
        <h3>Description:{course.description}</h3>
        <button onClick={() => navigate('/')}>No</button>
        <button onClick={() => removeCourse()}>Yes! I want to delete this</button>
    </div>
}

export default DeleteCourse