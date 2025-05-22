module.exports = (req, res, next) => {
    const {title, author, description, image, price, stock, category} = req.body;
    console.log(req.body);
    if (
        !title || 
        !author ||
        !description || 
        !image ||
        !price ||
        !stock ||
        !category
    ) {
        res.status(400).json({ message: "Todos los datos de el libro son obligatorios" });
    }
    next();
};


