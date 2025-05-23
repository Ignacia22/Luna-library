const bookServices = require('../services/bookServices');

module.exports = {

getBooks: async(req, res) => {
    try{
        console.log("🔍 Query params recibidos:", req.query);
        
        const result = await bookServices.getBooks(req.query); // Pasar req.query
        
        res.status(200).json(result);
    } catch(error) {
        console.error("❌ Error en controlador:", error);
        res.status(500).json({
            message: "Ha ocurrido un error al obtener los libros: " + error.message,
        })
    }
},

getBook: async(req, res) => {  
    try {
        const {id} = req.params;

        if (!id) { 
            return res.status(400).json({ message: "El ID del libro es obligatorio" });
        }

        const book = await bookServices.getBook(id);  

        if(!book) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        
        res.status(200).json(book);  

    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error al obtener el libro" });
    }
},

createBooks: async(req, res) => {
    try{
        console.log("📚 === INICIO createBooks ===");
        console.log("📋 Content-Type:", req.headers['content-type']);
        console.log("📋 req.body:", req.body);
        console.log("📋 req.files:", req.files);

        const body = req.body;
        
        // 🆕 Si hay archivos, buscar la imagen
        if (req.files && req.files.length > 0) {
            const imageFile = req.files.find(file => file.fieldname === 'image');
            if (imageFile) {
                body.image = imageFile.path;
                console.log("📷 Imagen añadida:", body.image);
            }
        }

        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ 
                message: "No se recibieron datos." 
            });
        }

        const { title, author, description, price, stock, category } = body;
        if (!title || !author || !description || !price || !stock || !category) {
            return res.status(400).json({ 
                message: "Campos requeridos: title, author, description, price, stock, category" 
            });
        }

        const newBook = await bookServices.createBooks(body);
        res.status(201).json({
            message: "Libro creado exitosamente",
            book: newBook
        });

    } catch(error){
        console.error("❌ Error completo:", error);
        res.status(500).json({
            message: "Error al crear el libro: " + error.message,
        })
    }
},

deleteBook: async(req, res) => {
    try {
    const {id} = req.params;

    if (!id) { return res.status(400).json({ message: "El ID del libro es obligatorio" });}

    const result = await bookServices.deleteBook(id);

    if(!result) {return res.status(404).json({ message: "Libro no encontrado" })};
    res.status(204).send();

    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error al eliminar el libro" });
    }
}

}