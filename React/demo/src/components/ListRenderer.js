function ListRenderer(){
    const fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

    return <div>
        <h1>Fruits:</h1>
        <ul>
            {
                fruits.map((fruit)=>(
                    <li> { fruit } </li>
                ))
            }
        </ul>
    </div>
    
}

export default ListRenderer