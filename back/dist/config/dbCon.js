"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const dbCon = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI no está definida en las variables de entorno');
        }
        console.log('Intentando conectar a MongoDB...');
        // 🆕 Configuración moderna de Mongoose (sin opciones deprecadas)
        await mongoose_1.default.connect(mongoUri);
        console.log('Conectado a MongoDB');
    }
    catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw new Error(`Error al conectar a MongoDB: ${error.message}`);
    }
};
exports.default = dbCon;
//# sourceMappingURL=dbCon.js.map