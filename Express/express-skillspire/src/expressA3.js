const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

var books = [
    {
        "id":1,
        "title":"Green eggs and Ham",
        "author":"Dr suess"
    },
    {
        "id":2,
        "title":"The Lorax",
        "author":"Dr suess"
    }
]

app.get("/books", (req,res)=>{
    res.json(books)
})

app.get("/books/:id", (req,res)=>{
    const {id} = req.params

    let book = books.find((book) => book["id"] == id)

    console.log(book)

    res.json(book)
})

const port = 8000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})