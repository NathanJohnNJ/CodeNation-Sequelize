const { Router } = require("express");

const genreRouter = Router();

const { addGenre, getAllGenres, getGenreAndBooks, getGenreAndAuthors, deleteGenre } = require("./controllers");

//add new book
genreRouter.post("/genres/addGenre", addGenre);

//get all books
genreRouter.get("/genres/getAllGenres", getAllGenres);

//get one book by title
genreRouter.get("/genres/getGenreAndBooks", getGenreAndBooks);

//dynamically update book by title
genreRouter.get("/genres/getGenreAndAuthors", getGenreAndAuthors);

//delete single book by title
genreRouter.delete("/genres/deleteGenre", deleteGenre);

module.exports = genreRouter;