import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000' //backend server
})

export const getTodos = () => api.get('/todos')
export const addTodo = (todo) => api.post('/todos',todo)
export const updateTodo = (id,todo) => api.put(`/todos/${id}`, todo)
export const deleteTodo = (id) => api.delete(`/todos/${id}`)