const express = require('express')
const bodyParser = require('body-parser')
const router = require("./routers/router")

const app = express()
app.use(bodyParser.json())

app.use("/", router)

const port = 8000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})