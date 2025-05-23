import { Request, Response } from 'express'; 
import bookServices from '../services/bookServices';
import { IPaginationQuery } from '../types/book.types';

// Extender Request para manejar archivos
interface MulterRequest extends Request {
    files?: any[];
}

export default {

getBooks: async(req: Request<{}, {}, {}, IPaginationQuery>, res: Response) => {
    try{
        console.log("🔍 Query params recibidos:", req.query);
        
        const result = await bookServices.getBooks(req.query);
        
        res.status(200).json(result);
    } catch(error: any) { // 🆕 Tipar error
        console.error("❌ Error en controlador:", error);
        res.status(500).json({
            message: "Ha ocurrido un error al obtener los libros: " + (error?.message || 'Error desconocido'),
        });
    }
},

getBook: async(req: Request, res: Response) => {  
    try {
        const {id} = req.params;

        if (!id) { 
            res.status(400).json({ message: "El ID del libro es obligatorio" });
            return;
        }

        const book = await bookServices.getBook(id);  

        if(!book) {
            res.status(404).json({ message: "Libro no encontrado" });
            return;
        }
        
        res.status(200).json(book);  

    } catch (error: any) { // 🆕 Tipar error
        console.error(error); 
        res.status(500).json({ message: "Error al obtener el libro" });
    }
},

createBooks: async(req: any, res: Response) => { // 🆕 Añadir tipos
    try{
        console.log("📚 === INICIO createBooks ===");
        console.log("📋 Content-Type:", req.headers['content-type']);
        console.log("📋 req.body:", req.body);
        console.log("📋 req.files:", req.files);

        const body = req.body;
        
        // 🆕 Si hay archivos, buscar la imagen
        if (req.files && req.files.length > 0) {
            const imageFile = req.files.find((file: any) => file.fieldname === 'image');
            if (imageFile) {
                body.image = imageFile.path;
                console.log("📷 Imagen añadida:", body.image);
            }
        }

        if (!body || Object.keys(body).length === 0) {
            res.status(400).json({ 
                message: "No se recibieron datos." 
            });
            return;
        }

        const { title, author, description, price, stock, category } = body;
        if (!title || !author || !description || !price || !stock || !category) {
            res.status(400).json({ 
                message: "Campos requeridos: title, author, description, price, stock, category" 
            });
            return;
        }

        const newBook = await bookServices.createBooks(body);
        res.status(201).json({
            message: "Libro creado exitosamente",
            book: newBook
        });

    } catch(error: any){ // 🆕 Tipar error
        console.error("❌ Error completo:", error);
        res.status(500).json({
            message: "Error al crear el libro: " + (error?.message || 'Error desconocido'),
        });
    }
},

deleteBook: async(req: Request, res: Response) => { // 🆕 Añadir tipos
    try {
        const {id} = req.params;

        if (!id) { 
            res.status(400).json({ message: "El ID del libro es obligatorio" });
            return;
        }

        const result = await bookServices.deleteBook(id);

        if(!result) {
            res.status(404).json({ message: "Libro no encontrado" });
            return;
        }
        
        res.status(204).send();

    } catch (error: any) { // 🆕 Tipar error
        console.error(error); 
        res.status(500).json({ message: "Error al eliminar el libro" });
    }
}

}