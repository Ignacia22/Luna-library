const axios = require('axios');
const Book = require('../models/Book');
const mongoose = require('mongoose');

module.exports = {



getBooks: async(queryParams = {}) => {
    try {
        console.log("🔍 Parámetros recibidos:", queryParams);
        
        // Paginación (ya funciona)
        const page = parseInt(queryParams.page) || 1;
        const limit = parseInt(queryParams.limit) || 10;
        const skip = (page - 1) * limit;
        
        // 🆕 FILTROS NUEVOS
        const searchFilters = {};
        
        // Filtro por categoría
        if (queryParams.category) {
            searchFilters.category = { $regex: queryParams.category, $options: 'i' };
            console.log("🏷️ Filtrando por categoría:", queryParams.category);
        }
        
        // Filtro por autor
        if (queryParams.author) {
            searchFilters.author = { $regex: queryParams.author, $options: 'i' };
            console.log("👤 Filtrando por autor:", queryParams.author);
        }
        
        // Filtro por precio
        if (queryParams.minPrice || queryParams.maxPrice) {
            searchFilters.price = {};
            if (queryParams.minPrice) {
                searchFilters.price.$gte = parseFloat(queryParams.minPrice);
                console.log("💰 Precio mínimo:", queryParams.minPrice);
            }
            if (queryParams.maxPrice) {
                searchFilters.price.$lte = parseFloat(queryParams.maxPrice);
                console.log("💰 Precio máximo:", queryParams.maxPrice);
            }
        }
        
        console.log("🔍 Filtros aplicados:", searchFilters);
        
        // Consulta con filtros y paginación
        const books = await Book.find(searchFilters) // 🆕 Ahora con filtros
            .skip(skip)
            .limit(limit)
            .sort({ _id: -1 }); // Más recientes primero
            
        // Contar total CON filtros
        const totalBooks = await Book.countDocuments(searchFilters); // 🆕 Con filtros
        const totalPages = Math.ceil(totalBooks / limit);
        
        console.log(`📊 Encontrados: ${books.length} libros de ${totalBooks} total`);
        
        return {
            books,
            pagination: {
                currentPage: page,
                totalPages,
                totalBooks,
                limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        };
    } catch (error) {
        console.error("Error al consultar la base de datos:", error);
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

