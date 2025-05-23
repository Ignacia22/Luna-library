"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
// 🆕 VOLVER a poner express.json() ANTES de las rutas
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(index_1.default); // Las rutas van DESPUÉS
exports.default = app;
//# sourceMappingURL=server.js.map