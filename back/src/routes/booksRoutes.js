const Router = require('express')
const booksController = require('../controllers/booksController')

const booksRoutes = Router();

booksRoutes.get('/books', booksController.getBooks);

booksRoutes.get('/books/:id', booksController.getBook); 

booksRoutes.post('/books', booksController.createBooks);

booksRoutes.delete('/books/:id', booksController.deleteBook)

module.exports = booksRoutes;
