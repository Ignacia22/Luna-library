import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// 🆕 Tipar manualmente la configuración
export interface CloudinaryStorageParams {
    cloudinary: typeof cloudinary;
    params: {
        folder: string;
        allowed_formats: string[];
        public_id: (req: any, file: any) => string;
    };
}

// Configurar Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// 🆕 Configurar storage con tipos manuales
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'luna-library',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        public_id: (req: any, file: any) => {
            return `book-${Date.now()}`;
        }
    }
} as CloudinaryStorageParams);

const upload = multer({ storage });

export { cloudinary, upload };