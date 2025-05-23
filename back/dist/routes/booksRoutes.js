"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = __importDefault(require("../controllers/booksController"));
const cloudinary_1 = require("../config/cloudinary");
const booksRoutes = (0, express_1.Router)();
const conditionalUpload = (req, res, next) => {
    console.log("🔧 Middleware condicional ejecutándose");
    console.log("🔧 Content-Type:", req.headers['content-type']);
    if (req.headers['content-type']?.includes('multipart/form-data')) {
        console.log("📷 Usando upload para multipart");
        // 🆕 Usar upload.any() - acepta cualquier campo
        return cloudinary_1.upload.any()(req, res, next);
    }
    console.log("📝 Usando parsing JSON existente");
    next();
};
booksRoutes.get('/books', booksController_1.default.getBooks);
booksRoutes.get('/books/:id', booksController_1.default.getBook);
booksRoutes.post('/books', conditionalUpload, booksController_1.default.createBooks); // 🆕
booksRoutes.delete('/books/:id', booksController_1.default.deleteBook);
exports.default = booksRoutes;
//# sourceMappingURL=booksRoutes.js.map