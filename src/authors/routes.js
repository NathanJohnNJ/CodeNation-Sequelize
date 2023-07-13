const { Router } = require("express");

const authorRouter = Router();

const { addAuthor, getAllAuthors } = require("./controllers");

//add an author
authorRouter.post("/authors/addAuthor", addAuthor);

//get a single author by name and retrieves associated books
authorRouter.get("authors/getAllAuthors", getAllAuthors);

module.exports = authorRouter;