import { Request, Response } from 'express';
import imageServices from '../services/imageServices';

export default {
    uploadImage: async (req: Request, res: Response) => {
        console.log("🚀 INICIO - uploadImage ejecutándose");

    try {
        console.log("📷 Recibiendo petición...");
        console.log("📋 Headers:", req.headers);
        console.log("📋 req.file:", req.file);
        console.log("📋 req.body:", req.body);
        
        if (!req.file) {
            console.log("❌ No hay req.file");
            res.status(400).json({ message: "No se recibió ninguna imagen" });
            return;
        }

        // 🆕 Añadir logs antes de llamar al servicio
        console.log("✅ Archivo recibido, procesando con servicio...");
        const imageData = await imageServices.uploadImage(req.file);
        
        console.log("✅ Imagen procesada exitosamente:", imageData);
        res.status(200).json({
            message: "Imagen subida exitosamente",
            image: imageData
        });

    } catch (error: any) {
        console.error("❌ Error completo:", error); // 🆕 Error completo
        console.error("❌ Error message:", error.message); // 🆕 Solo el mensaje
        console.error("❌ Error stack:", error.stack); // 🆕 Stack trace
        res.status(500).json({
            message: "Error al subir imagen: " + error.message
        });
    }
},


    deleteImage: async(req: Request, res: Response) => {
        try {
            const { publicId } = req.params;

            if (!publicId) {
                res.status(400).json({ message: "Public ID es requerido" });
                return;
            }

            await imageServices.deleteImage(publicId);

            res.status(200).json({
                message: "Imagen eliminada exitosamente"
            });
        } catch (error: any) {
            console.error("❌ Error al eliminar imagen:", error);
            res.status(500).json({
                message: "Error al eliminar imagen: " + error.message
            });
        }
    }
}