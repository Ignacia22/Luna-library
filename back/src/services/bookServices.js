const axios = require('axios');
const Book = require('../models/Book');
const mongoose = require('mongoose');

module.exports = {

getBooks: async() => {
    try {
        const books = await Book.find().populate('title')
        return books;
    } catch (error) {
        console.error("Error al consultar la base de datos:", error);
        throw new Error("Error al obtener los libros");
    }
},

createBooks: async(book) => {
    try {
        const newBook = await Book.create(book)
        return newBook;
    } catch (error) {
        console.error("Error al crear el libro:", error);
        throw new Error("Error al crear el libro");
    }
},

deleteBook: async (id) => {
    try {
        // Validar que el ID sea un ObjectId válido
        if (!mongoose.isValidObjectId(id)) {
            throw new Error('ID de libro inválido');
        }

        const result = await Book.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return null; 
        }

        return result;
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        throw new Error(`Error al eliminar el libro: ${error.message}`);
    }
}

}

