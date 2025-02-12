import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

        let username = e.target.username.value
        let password = e.target.password.value

       if(username === "user" && password === "1234"){
            navigate(`/dashboard/${username}`)
       }else{
            navigate('/login')
            e.target.reset()
       }
    }
    
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Username:</label><br/>
                <input type="text" name="username" placeholder='Username' /><br/>

                <label>Password:</label><br/>
                <input type="password" name="password" placeholder='Password' /><br/>    

                <input type="submit" value="Submit!" />
            </form>
        </div>
    )
}   

export default Login