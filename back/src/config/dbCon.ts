require('dotenv').config();
import mongoose from 'mongoose';


interface MongoConfig {
    MONGO_URI: string;
}

const dbCon = async () => {
    try {

        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI no está definida en las variables de entorno');
        }

        console.log('Intentando conectar a MongoDB...');
        
        // 🆕 Configuración moderna de Mongoose (sin opciones deprecadas)
        await mongoose.connect(mongoUri);
        console.log('Conectado a MongoDB');

    } catch (error: any) {
        console.error('Error al conectar a MongoDB:', error);
        throw new Error(`Error al conectar a MongoDB: ${error.message}`);
    }
};

export default dbCon;