import express, { Request, Response } from 'express';

const booksController = (req: Request, res: Response) => {
    res.json({ message: "Estamos recibiendo una solicitud para obtener la info de los usuarios" });
}

const postControllerBooks = (req: Request, res: Response) => {
    res.json({ message: "Estamos enviando información de los posts" });
};


export default {
    booksController,
    postControllerBooks
}