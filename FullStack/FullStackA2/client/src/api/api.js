import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000' //backend server
})

export const getCourses = () => api.get('/courses')
export const addCourse = (course) => api.post('/courses',course)
export const deleteCourse = (id) => api.delete(`/courses/${id}`)