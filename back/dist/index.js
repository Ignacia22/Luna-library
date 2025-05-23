"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const dbCon_1 = __importDefault(require("./config/dbCon"));
const PORT = process.env.PORT || 3002;
(0, dbCon_1.default)().then((res) => {
    console.log('Base de datos conectada exitosamente');
    server_1.default.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map