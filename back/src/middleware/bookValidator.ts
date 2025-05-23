import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    const { title, author, description, image, price, stock, category } = req.body;
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
        return res.status(400).json({ 
            message: "Todos los datos del libro son obligatorios" 
        });
    }
    
    next();
};