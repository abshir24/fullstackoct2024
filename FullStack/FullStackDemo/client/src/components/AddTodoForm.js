import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addTodo, getTodos } from '../api/api'
import { Link } from 'react-router-dom';


function AddTodoForm(){
    const navigate = useNavigate()
    const [todos, setTodos] = useState(null)


    useEffect(() =>{
        const fetchTodo = async() =>{
            const response = await getTodos();

            setTodos(response.data)
        }

        fetchTodo()
    })



    const handleSubmit = async (e) =>{
        e.preventDefault()

        let todo = e.target['todo'].value
        let description = e.target['description'].value

        const response = await addTodo({todo: todo, description: description})

        setTodos(response.data)
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Add a new item on your Todo List:</h1>

                <input type="text" placeholder='title' name ="todo" />

                <input type="text" placeholder="description" name="description" />

                <button type="submit">Add Todo</button>
            </form>

            <h1>Todo List</h1>
            <table>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Action</td>
                </tr>

                {
                    todos.map(todo=>(
                        <tr>
                            <td>{todo.todo}</td>
                            <td>{todo.description}</td>
                            <td><Link to={`/edit/${todo._id}`}>Edit</Link></td>
                            <td><Link to={`/delete/${todo._id}`}>Delete</Link></td>
                        </tr>
                    ))
                }
            </table>


        </div>
        
    )
}

export default AddTodoForm