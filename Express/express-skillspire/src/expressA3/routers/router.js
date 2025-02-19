const express = require("express")
const router = express.Router()
const { getAllBooks, findBookById,addBook,updateBook,deleteBook } = require("../controllers/controller")

router.get("/books", getAllBooks)
router.get("/books/:id",findBookById)
router.post("/books", addBook)
router.put("/books/:id",updateBook)
router.delete("/books/:id",deleteBook)

module.exports = router