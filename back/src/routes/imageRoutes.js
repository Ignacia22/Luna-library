const { Router } = require('express');
const imageController = require('../controllers/imageController');
const { upload } = require('../config/cloudinary');

const imageRoutes = Router();

console.log("🛠️ Configurando rutas de imágenes...");
console.log("🛠️ Upload middleware:", upload ? "✅ Cargado" : "❌ Error");

// // 🆕 Ruta de prueba SIN middleware
// imageRoutes.post('/upload-test', (req, res) => {
//     console.log("✅ Ruta /upload-test funciona");
//     res.status(200).json({ message: "Ruta funcionando" });
// });

imageRoutes.post('/upload', (req, res, next) => {
    console.log("🛣️ Entrando a ruta /upload");
    next();
}, (req, res, next) => {
    console.log("🔧 Antes de upload.single('image')");
    upload.single('image')(req, res, (err) => {
        if (err) {
            console.error("❌ Error en upload.single:", err);
            console.error("❌ Error name:", err.name);
            console.error("❌ Error message:", err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log("✅ upload.single completado");
        next();
    });
}, imageController.uploadImage);

// DELETE /upload/:publicId - Eliminar imagen
imageRoutes.delete('/upload/:publicId', imageController.deleteImage);

module.exports = imageRoutes;