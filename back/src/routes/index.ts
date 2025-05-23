import { Router } from 'express';
import booksController from '../controllers/index';
import booksRoutes from './booksRoutes';
import imageRoutes from './imageRoutes';

const router = Router();


router.get("/", (req, res) => {
    console.log("Hola estamos probando la app")
})

router.use(booksRoutes);
router.use(imageRoutes);


export default router;