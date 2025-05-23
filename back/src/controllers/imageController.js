const imageServices = require('../services/imageServices');

module.exports = {
    uploadImage: async (req, res) => {
        console.log("🚀 INICIO - uploadImage ejecutándose");

    try {
        console.log("📷 Recibiendo petición...");
        console.log("📋 Headers:", req.headers);
        console.log("📋 req.file:", req.file);
        console.log("📋 req.body:", req.body);
        
        if (!req.file) {
            console.log("❌ No hay req.file");
            return res.status(400).json({ message: "No se recibió ninguna imagen" });
        }

        // 🆕 Añadir logs antes de llamar al servicio
        console.log("✅ Archivo recibido, procesando con servicio...");
        const imageData = await imageServices.uploadImage(req.file);
        
        console.log("✅ Imagen procesada exitosamente:", imageData);
        res.status(200).json({
            message: "Imagen subida exitosamente",
            image: imageData
        });

    } catch (error) {
        console.error("❌ Error completo:", error); // 🆕 Error completo
        console.error("❌ Error message:", error.message); // 🆕 Solo el mensaje
        console.error("❌ Error stack:", error.stack); // 🆕 Stack trace
        res.status(500).json({
            message: "Error al subir imagen: " + error.message
        });
    }
},


    deleteImage: async(req, res) => {
        try {
            const { publicId } = req.params;

            if (!publicId) {
                return res.status(400).json({ message: "Public ID es requerido" });
            }

            await imageServices.deleteImage(publicId);

            res.status(200).json({
                message: "Imagen eliminada exitosamente"
            });
        } catch (error) {
            console.error("❌ Error al eliminar imagen:", error);
            res.status(500).json({
                message: "Error al eliminar imagen: " + error.message
            });
        }
    }
}