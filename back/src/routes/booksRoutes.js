const Router = require('express')
const booksController = require('../controllers/booksController')

const booksRoutes = Router();

booksRoutes.get('/books', booksController.getBooks);

booksRoutes.post('books', booksController.createBooks);

module.exports = booksRoutes;
