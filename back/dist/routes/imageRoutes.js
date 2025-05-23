"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = __importDefault(require("../controllers/imageController"));
const cloudinary_1 = require("../config/cloudinary");
const imageRoutes = (0, express_1.Router)();
imageRoutes.post('/upload', (req, res, next) => {
    console.log("🛣️ Entrando a ruta /upload");
    next();
}, (req, res, next) => {
    console.log("🔧 Antes de upload.single('image')");
    cloudinary_1.upload.single('image')(req, res, (err) => {
        if (err) {
            console.error("❌ Error en upload.single:", err);
            return res.status(500).json({ error: err.message });
        }
        console.log("✅ upload.single completado");
        next();
    });
}, imageController_1.default.uploadImage);
imageRoutes.delete('/upload/:publicId', imageController_1.default.deleteImage);
exports.default = imageRoutes;
//# sourceMappingURL=imageRoutes.js.map