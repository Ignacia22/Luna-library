const bookServices = require('../services/bookServices');

module.exports = {

getBooks: async(req, res) => {
    try{
        const books = await bookServices.getBooks()
        res.status(200).json(books)
    } catch(error) {
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
    const {body} = req;
    try{
        const newBook = await bookServices.createBooks(body)
        res.status(201).json(newBook)
    } catch(error){
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