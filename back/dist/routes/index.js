"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksRoutes_1 = __importDefault(require("./booksRoutes"));
const imageRoutes_1 = __importDefault(require("./imageRoutes"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    console.log("Hola estamos probando la app");
});
router.use(booksRoutes_1.default);
router.use(imageRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map