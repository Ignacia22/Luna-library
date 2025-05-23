"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../models/Book"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = {
    getBooks: async (queryParams = {}) => {
        try {
            console.log("🔍 Parámetros recibidos:", queryParams);
            // Paginación (ya funciona)
            const page = parseInt(queryParams.page || '1') || 1;
            const limit = parseInt(queryParams.limit || '10') || 10;
            const skip = (page - 1) * limit;
            // 🆕 FILTROS NUEVOS - Tipar como any para MongoDB
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
            const books = await Book_1.default.find(searchFilters)
                .skip(skip)
                .limit(limit)
                .sort({ _id: -1 });
            // Contar total CON filtros
            const totalBooks = await Book_1.default.countDocuments(searchFilters);
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
        }
        catch (error) {
            console.error("Error al consultar la base de datos:", error);
            throw new Error("Error al obtener los libros");
        }
    },
    getBook: async (id) => {
        try {
            if (!mongoose_1.default.isValidObjectId(id)) {
                throw new Error('ID de libro inválido');
            }
            const book = await Book_1.default.findById(id);
            return book;
        }
        catch (error) {
            console.error("Error al consultar el libro:", error);
            throw new Error("Error al obtener el libro");
        }
    },
    createBooks: async (book) => {
        try {
            const newBook = await Book_1.default.create(book);
            return newBook;
        }
        catch (error) {
            console.error("Error al crear el libro:", error);
            throw new Error("Error al crear el libro");
        }
    },
    deleteBook: async (id) => {
        try {
            // Validar que el ID sea un ObjectId válido
            if (!mongoose_1.default.isValidObjectId(id)) {
                throw new Error('ID de libro inválido');
            }
            const result = await Book_1.default.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                return null;
            }
            return result;
        }
        catch (error) {
            console.error('Error al eliminar el libro:', error);
            throw new Error(`Error al eliminar el libro: ${error?.message || 'Error desconocido'}`);
        }
    }
};
//# sourceMappingURL=bookServices.js.map