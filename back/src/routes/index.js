const {Router} = require('express');
const booksController = require('../controllers/index');
const booksRoutes = require('./booksRoutes');

const router = Router();


router.get("/", (req, res) => {
    console.log("Hola estamos probando la app")
})

router.use(booksRoutes);


module.exports = router;