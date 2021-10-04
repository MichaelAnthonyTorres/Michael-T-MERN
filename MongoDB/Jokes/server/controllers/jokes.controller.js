const { request } = require("express");
const Joke = require("../models/jokes.model");
const jokesRoutes = require("../routes/jokes.routes");

const getAllJokes = (req, res) => {
    Joke.find()
      .then((allJokes) => res.json({ joke: allJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({joke: oneJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

const addJoke = (req, res) => {
    Joke.create({
        joke: req.body.joke,
        punchLine: req.body.punchLine,
    })
    .then((addJoke) => res.json({addJoke: addJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        {new: true}
    )
    .then((updateJoke) => res.json({updateJoke: updateJoke}))
    .catch(err=> res.json({ message: "Something went wrong", error: err}))
}

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then((deleteJoke) => res.json({deleteJoke: deleteJoke}))
    .catch(err=> res.json({ message: "Something went wrong", error: err}))
}

module.exports ={
    getAllJokes,
    getOneJoke,
    addJoke,
    updateJoke,
    deleteJoke,
}