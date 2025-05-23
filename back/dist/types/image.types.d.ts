export interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    path: string;
    size: number;
    filename: string;
}
export interface ImageUploadResponse {
    url: string;
    publicId: string;
}
export interface CloudinaryDeleteResponse {
    result: string;
    [key: string]: any;
}
//# sourceMappingURL=image.types.d.ts.map