const axios = require('axios');
const Book = require('../models/Book');
const mongoose = require('mongoose');

module.exports = {

getBooks: async() => {
    try {
        console.log("🔍 Ejecutando consulta en la base de datos...");
        
        // Ver todas las bases de datos en tu cluster
        const admin = mongoose.connection.db.admin();
        const dbs = await admin.listDatabases();
        console.log("🗄️ Todas las bases de datos:", dbs.databases.map(db => db.name));
        
        // Ver en cuál base de datos estás actualmente
        console.log("📍 Base de datos actual:", mongoose.connection.db.databaseName);
        
        const books = await Book.find();
        console.log("📊 Libros encontrados:", books);
        console.log("📊 Cantidad:", books.length);
        return books;
    } catch (error) {
        console.error("❌ Error en servicio:", error);
        throw new Error("Error al obtener los libros");
    }
},


getBook: async(id) => {
    try {
        if (!mongoose.isValidObjectId(id)) {
            throw new Error('ID de libro inválido');
        }

        const book = await Book.findById(id);
        return book;
    } catch (error) {
        console.error("Error al consultar el libro:", error);
        throw new Error("Error al obtener el libro");
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

