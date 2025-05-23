import { Request, Response, NextFunction, Router } from 'express';
import booksController from '../controllers/booksController';
import { upload } from '../config/cloudinary';


const booksRoutes = Router();

const conditionalUpload = (req: Request, res: Response, next: NextFunction) => {
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

export default booksRoutes;