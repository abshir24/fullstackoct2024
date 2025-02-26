const Todo = require('../models/Todo')

const getAllTodos = async (req,res) =>{
    let todos = await Todo.find()
    
    res.json(todos)
}

const getTodoById = (req,res) =>{
    Todo.findById(req.params.id)
        .then((todo) => res.json(todo))
        .catch((err) => res.send(err))
}

const addTodo = (req,res) =>{
    const { todo, description } = req.body

    const newTodo = new Todo({
        todo:todo,
        description: description
    })

    newTodo.save()
        .then((todo) =>{
            console.log("Successfully saved record")
            res.json(todo)
        })
        .catch((err) => console.log("Error:", err))
}

const updateTodo = (req,res) =>{
    Todo.findByIdAndUpdate(req.params.id, req.body, { new:true })
        .then((todo) => res.json(todo))
        .catch((err) => res.send(err))
}

const deleteTodo = (req,res) =>{
   Todo.findByIdAndDelete(req.params.id)
        .then((todo) => res.json(todo))
        .catch((err) => res.send(err)) 
}

module.exports = {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo
}