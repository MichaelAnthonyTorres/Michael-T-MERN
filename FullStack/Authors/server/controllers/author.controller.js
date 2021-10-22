const Author = require('../models/author.model'); 

const createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name,
    })
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json(err));
}

const getAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json(err));
}

const getAuthorById = (req, res) => {
    Author.findById({_id: req.params._id})
    .then(authorId => res.json(authorId))
    .catch(err => res.json(err));
}

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new:true, runValidators:true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.json(err));
}

const deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
    .then(deletedAuthor => res.json(deletedAuthor))
    .catch(err => res.json(err))
}

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
}