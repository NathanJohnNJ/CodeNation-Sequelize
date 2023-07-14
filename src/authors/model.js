const { DataTypes } = require("sequelize");

const connection = require("../db/connection");

const Author = connection.define("Author", {
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Author;