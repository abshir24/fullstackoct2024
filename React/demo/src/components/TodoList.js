function TodoList(){
    const todolist = ["Dishes", "Laundry","Cleaning","Grocery Shopping"]

    if(todolist.length === 0){
        return <h1>List is Empty</h1>
    }

    return <div>
        <h1>Todo List:</h1>
        
        <ul>
            {
                todolist.map((item)=>(
                    <li>{item}</li>
                ))
            }
        </ul>
    </div>
}

export default TodoList