const Router = require('express')
const booksController = require('../controllers/booksController')
const { upload } = require('../config/cloudinary');

const booksRoutes = Router();

const conditionalUpload = (req, res, next) => {
    console.log("🔧 Middleware condicional ejecutándose");
    console.log("🔧 Content-Type:", req.headers['content-type']);
    
    if (req.headers['content-type']?.includes('multipart/form-data')) {
        console.log("📷 Usando upload para multipart");
        
        // 🆕 Usar upload.any() - acepta cualquier campo
        return upload.any()(req, res, next);
    }
    
    console.log("📝 Usando parsing JSON existente");
    next();
};

booksRoutes.get('/books', booksController.getBooks);
booksRoutes.get('/books/:id', booksController.getBook);
booksRoutes.post('/books', conditionalUpload, booksController.createBooks); // 🆕
booksRoutes.delete('/books/:id', booksController.deleteBook)

module.exports = booksRoutes;