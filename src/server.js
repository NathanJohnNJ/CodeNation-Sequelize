require("dotenv").config();

const express = require("express");

const Book = require("./books/model");
const bookRouter = require("./books/routes");
const Author = require("./authors/model");
const authorRouter = requre("./authors/routes");

const port = process.env.PORT ||  5001;

const app = express();

const syncTables = () => {
    Book.sync();
    Author.sync();
}

app.use(express.json());
app.use(bookRouter);
app.use(authorRouter);

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
})