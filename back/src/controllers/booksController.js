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
}

}