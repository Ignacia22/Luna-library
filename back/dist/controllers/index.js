"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booksController = (req, res) => {
    res.json({ message: "Estamos recibiendo una solicitud para obtener la info de los usuarios" });
};
const postControllerBooks = (req, res) => {
    res.json({ message: "Estamos enviando información de los posts" });
};
exports.default = {
    booksController,
    postControllerBooks
};
//# sourceMappingURL=index.js.map