const Movie = require('../models/movie.model');

const createMovie = (req, res) =>{
    const{title, name, rating, review} = req.body;
    Movie
    .create({
        title,
        name,
        rating,
        review
    })
    .then(addMovie => res.json(addMovie))
    .catch(err=> res.json(err)) 
}

const getAllMovies = (req, res) => {
    Movie.find()
    .then((allMovies)=> res.json({allMovies}))
    .catch((err) => res.status(400).json({error: err}))
}

const getOneMovie = (req, res) => {
    Movie.findOne({_id: req.params.movieId})
    .then((oneMovie)=> res.json({oneMovie}))
    .catch((err) => res.status(400).json({error: err}))
}

const updateMovie = (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieId},
        req.body,
        {new: true,
        runValidators: true
    })
    .then((currentMovie)=> res.json({currentMovie}))
    .catch((err) => res.status(400).json({error: err}))
}

const deleteMovie = (req, res) => {
    Movie.deleteOne({_id: req.params.movieId})
    .then((removeMovie)=> res.status(200).send('Deleted'))
    .catch((err) => res.status(400).json({error: err}))
}

module.exports ={
    createMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie,
};