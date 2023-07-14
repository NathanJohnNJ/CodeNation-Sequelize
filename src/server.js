require("dotenv").config();

const express = require("express");

const Author = require("./authors/model");
const authorRouter = require("./authors/routes");
const Genre = require("./genres/model");
const genreRouter = require("./genres/routes");
const Book = require("./books/model");
const bookRouter = require("./books/routes");

const port = process.env.PORT ||  5001;

const app = express();

const syncTables = () => {
    Author.sync({ alter: true });
    Genre.sync({ alter: true });
    Author.hasMany(Book);
    Author.hasMany(Genre);
    Genre.hasMany(Book);
    Genre.hasMany(Author);
    Book.sync({ alter: true });
    Book.belongsTo(Author);
    Book.belongsTo(Genre);
}

app.use(express.json());
app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter);

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
})