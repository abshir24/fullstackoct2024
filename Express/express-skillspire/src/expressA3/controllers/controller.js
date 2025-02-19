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


const getAllBooks = (req,res)=>{
    res.json(books)
}

const findBookById = (req,res)=>{
    const {id} = req.params

    let book = books.find((book) => book["id"] == id)

    res.json(book)
}

const addBook = (req,res) => {
    books.push( req.body )

    res.json( books )
}

const updateBook = (req,res) =>{
    let currentBookIndex = books.findIndex(book => book.id == req.params.id)

    books[currentBookIndex] = req.body

    res.json( books )
}

const deleteBook = (req,res) =>{
    let currentBookIndex = books.findIndex(book => book.id == req.params.id)

    books.splice(currentBookIndex, 1)

    res.json( books )
}



module.exports = {
    getAllBooks,
    findBookById,
    addBook,
    updateBook,
    deleteBook
}