const express = require('express')
const bodyParser = require('body-parser')
const router = require("./routers/router")
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use("/", router)

const port = 8000
let connection_string = "mongodb+srv://abshir24:NUSv1sOaW66hkiAT@cluster0.vl2zp.mongodb.net/?"

mongoose.connect(connection_string)
.then(()=>{
    console.log("Connected To DB")

    app.listen(port, ()=>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})


