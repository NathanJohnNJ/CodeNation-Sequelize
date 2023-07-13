const Author = require("./model")

const addAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create({
            name: req.body.name
        })
        res.status(201).json({message: `${req.body.name} successfully added.`, author: newAuthor});
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error});
        console.log(error);       
    }
};

const getAllAuthors = async (req, res) => {
    try {
        const allAuthors = await Author.findAll({})
        res.status(201).json({message: "All authors found", authors: allAuthors});
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error});
        console.log(error);        
    }
};

module.exports = {
    addAuthor,
    getAllAuthors
}