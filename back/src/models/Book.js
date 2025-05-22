const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true}, 
    author: {type: String, required: true},
    description: {type: String, required: true}, 
    image: {type: String, required: true}, 
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true}
},
{
    versionKey: false // ← Esto elimina el __v
}
);


const Book = mongoose.model('Book', bookSchema, 'Libreria');

module.exports = Book;