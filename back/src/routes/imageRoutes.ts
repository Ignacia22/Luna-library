import { Request, Response, NextFunction, Router } from 'express';
import imageController from '../controllers/imageController';
import { upload } from '../config/cloudinary';

const imageRoutes = Router();

imageRoutes.post('/upload', 
    (req: Request, res: Response, next: NextFunction) => {
        console.log("🛣️ Entrando a ruta /upload");
        next();
    }, 
    (req: Request, res: Response, next: NextFunction) => { 
        console.log("🔧 Antes de upload.single('image')");
        upload.single('image')(req, res, (err: any) => { 
            if (err) {
                console.error("❌ Error en upload.single:", err);
                return res.status(500).json({ error: err.message });
            }
            console.log("✅ upload.single completado");
            next();
        });
    }, 
    imageController.uploadImage 
);

imageRoutes.delete('/upload/:publicId', imageController.deleteImage);

export default imageRoutes;