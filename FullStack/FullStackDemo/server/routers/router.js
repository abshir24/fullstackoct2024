const express = require("express")
const router = express.Router()
const { getAllTodos, getTodoById,addTodo,updateTodo,deleteTodo } = require("../controllers/controller")


router.get('/todos',getAllTodos)
router.get('/todos/:id',getTodoById)
router.post('/todos', addTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

module.exports = router