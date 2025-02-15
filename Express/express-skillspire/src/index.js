const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.send("<h1> Hello World Express! </h1>")
})

app.get("/yourname/:name", (request,response)=>{
    response.send(`<h1> Hello ${request.params.name} ! </h1>`)
})

app.post('/postdata', (request,response)=>{
    console.log("Post Data: ", request.body)
})


const port = 8000
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})