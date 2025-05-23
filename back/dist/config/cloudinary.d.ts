import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
export interface CloudinaryStorageParams {
    cloudinary: typeof cloudinary;
    params: {
        folder: string;
        allowed_formats: string[];
        public_id: (req: any, file: any) => string;
    };
}
declare const upload: multer.Multer;
export { cloudinary, upload };
//# sourceMappingURL=cloudinary.d.ts.map