const express = require("express")
const router = express.Router()
const { getAllCourses, addCourse,deleteCourse } = require("../controllers/controller")


router.get('/courses',getAllCourses)
router.post('/courses', addCourse)
router.delete('/courses/:id', deleteCourse)

module.exports = router