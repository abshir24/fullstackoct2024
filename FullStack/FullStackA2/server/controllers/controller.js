const Course = require('../models/Course')

const getAllCourses = async (req,res) =>{
    let courses = await Course.find()
    
    res.json(courses)
}

const addCourse = (req,res) =>{
    console.log(req.body)

    const { name, description } = req.body

    const newCourse = new Course({
        name:name,
        description: description
    })

    newCourse.save()
        .then(async (course) =>{
            
            let allCourses = await Course.find()

            res.json(allCourses)
        })
        .catch((err) => console.log("Error:", err))
}

const deleteCourse = (req,res) =>{
   Course.findByIdAndDelete(req.params.id)
        .then(async (course) =>{
            let allCourses = await Course.find()

            res.json(allCourses)
        })
        .catch((err) => res.send(err)) 
}

module.exports = {
    getAllCourses,
    addCourse,
    deleteCourse
}