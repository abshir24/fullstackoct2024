const express = require('express')
const bodyParser = require('body-parser')
const router = require("./routers/router")
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())

app.use("/", router)

const port = 8000
let connection_string = "mongodb+srv://abshir24:NUSv1sOaW66hkiAT@cluster0.vl2zp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connection_string)
.then(()=>{
    console.log("Connected To DB")

    app.listen(port, ()=>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})


