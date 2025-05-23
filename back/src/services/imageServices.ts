import { cloudinary } from '../config/cloudinary';
import { MulterFile, ImageUploadResponse, CloudinaryDeleteResponse } from '../types/image.types'; // 🆕 Importar tipos

export default {
    uploadImage: async(file: MulterFile): Promise<ImageUploadResponse> => {
        try {
            console.log("📷 Imagen subida a Cloudinary:", file.filename);
            return {
                url: file.path,
                publicId: file.filename
            };
        } catch (error: any) {
            console.error("Error al procesar imagen:", error);
            throw new Error("Error al subir imagen");
        }
    },

    deleteImage: async(publicId: string): Promise<CloudinaryDeleteResponse> => {
        try {
            const result: CloudinaryDeleteResponse = await cloudinary.uploader.destroy(publicId);
            console.log("🗑️ Imagen eliminada:", publicId);
            return result;
        } catch (error: any) {
            console.error("Error al eliminar imagen:", error);
            throw new Error("Error al eliminar imagen");
        }
    }
}