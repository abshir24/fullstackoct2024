let todos = [
    {
        "id":1,
        "todo":"Laundry",
        "description":"Do laundry!"
    },
    {
        "id":2,
        "todo":"Clean Kitchen",
        "description":"Clean Kitchen!"
    }
]

const getAllTodos = (req,res) =>{
    res.json(todos)
}

const getTodoById = (req,res) =>{
    let todo = todos.find(todo => todo.id == req.params.id)

    res.json(todo)
}

const addTodo = (req,res) =>{
    todos.push(req.body)

    res.json(todos)
}

const updateTodo = (req,res) =>{
    let todoIndex = todos.findIndex(todo => todo.id == req.params.id)

    todos[todoIndex] = req.body

    res.json(todos)
}

const deleteTodo = (req,res) =>{
    let todoIndex = todos.findIndex(todo => todo.id == req.params.id)

    todos.splice(todoIndex,1)

    res.json(todos)
}

module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
}