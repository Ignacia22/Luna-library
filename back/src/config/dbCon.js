require('dotenv').config();
const mongoose = require('mongoose');

const dbCon = async () => {
    try {
        console.log('Intentando conectar a MongoDB:', process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw new Error(`Error al conectar a MongoDB: ${error.message}`);
    }
};

module.exports = dbCon;