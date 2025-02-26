const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
   todo: {
        type:String,
        required: true
   },
   description: {
        type:String,
        required: true
   },
   createdAt:{
        type: Date,
        default: Date.now
   }
})

module.exports = mongoose.model('Todo', todoSchema)











// {
//     "id":1,
//     "todo":"Laundry",
//     "description":"Do laundry!"
// },