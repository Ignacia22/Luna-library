"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../config/cloudinary");
exports.default = {
    uploadImage: async (file) => {
        try {
            console.log("📷 Imagen subida a Cloudinary:", file.filename);
            return {
                url: file.path,
                publicId: file.filename
            };
        }
        catch (error) {
            console.error("Error al procesar imagen:", error);
            throw new Error("Error al subir imagen");
        }
    },
    deleteImage: async (publicId) => {
        try {
            const result = await cloudinary_1.cloudinary.uploader.destroy(publicId);
            console.log("🗑️ Imagen eliminada:", publicId);
            return result;
        }
        catch (error) {
            console.error("Error al eliminar imagen:", error);
            throw new Error("Error al eliminar imagen");
        }
    }
};
//# sourceMappingURL=imageServices.js.map