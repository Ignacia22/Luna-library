const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, require: true, unique: true},
    author: {type: String, require: true},
    description: {type: String, require: true, unique: true},
    image: {type: String, require: true, unique: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    category: {type: String, require: true}
})


const Book = mongoose.model('Book', bookSchema, 'Libreria');

module.exports = Book;