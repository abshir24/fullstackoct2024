import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Dashboard(){
    const { username } = useParams()

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome to the dashboard {username}!</h2>
        </div>
    )
}   

export default Dashboard