import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from '../api/api'
import { Link } from 'react-router-dom';


function EditTodoForm(){
    const navigate = useNavigate()
    const [todos, setTodos] = useState(null)
    const params = useParams()


    const handleSubmit = async (e) =>{
        e.preventDefault()

        let todo = e.target['todo'].value
        let description = e.target['description'].value

        const response = await updateTodo(params.id,{todo: todo, description: description})

        navigate('/')
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Edit an item on your Todo List:</h1>

                <input type="text" placeholder='title' name ="todo" />

                <input type="text" placeholder="description" name="description" />

                <button type="submit">Edit Todo</button>
            </form>
        </div>
    )
}

export default EditTodoForm