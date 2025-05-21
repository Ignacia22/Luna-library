const booksController = (req, res) => {
    res
    .send("Estamos recibiendo una solicitud para obtener la info de los usuarios");
}

const postControllerBooks = (req, res) => {
    res
    .send("Estamos enviando información de los posts");
};


module.exports = {
    booksController,
    postControllerBooks
}