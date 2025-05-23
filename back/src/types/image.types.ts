// Tipos para archivos de Multer/Cloudinary
export interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    path: string;           // URL de Cloudinary
    size: number;
    filename: string;       // Public ID de Cloudinary
}

// Respuesta de upload de imagen
export interface ImageUploadResponse {
    url: string;
    publicId: string;
}

// Respuesta de eliminación de Cloudinary
export interface CloudinaryDeleteResponse {
    result: string;
    [key: string]: any; // Cloudinary puede devolver más propiedades
}