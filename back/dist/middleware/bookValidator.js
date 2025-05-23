"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const { title, author, description, image, price, stock, category } = req.body;
    console.log(req.body);
    if (!title ||
        !author ||
        !description ||
        !image ||
        !price ||
        !stock ||
        !category) {
        return res.status(400).json({
            message: "Todos los datos del libro son obligatorios"
        });
    }
    next();
};
//# sourceMappingURL=bookValidator.js.map