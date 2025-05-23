const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


// 🆕 VERIFICAR VARIABLES DE ENTORNO
console.log("🔑 Verificando variables de entorno:");
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? "✅ Existe" : "❌ No existe");
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "✅ Existe" : "❌ No existe");

// Configurar Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// 🆕 VERIFICAR CONFIGURACIÓN
console.log("🔧 Configuración de Cloudinary:", cloudinary.config());

// Configurar storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'luna-library', // Carpeta en Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        public_id: (req, file) => {
            return `book-${Date.now()}`; // Nombre único
        }
    }
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };