import { MulterFile, ImageUploadResponse, CloudinaryDeleteResponse } from '../types/image.types';
declare const _default: {
    uploadImage: (file: MulterFile) => Promise<ImageUploadResponse>;
    deleteImage: (publicId: string) => Promise<CloudinaryDeleteResponse>;
};
export default _default;
//# sourceMappingURL=imageServices.d.ts.map