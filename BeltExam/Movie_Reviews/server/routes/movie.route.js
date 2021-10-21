const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get("/api/movie", MovieController.getAllMovies);
    app.post("/api/movie", MovieController.createMovie);
    app.get("/api/movie/:movieId", MovieController.getOneMovie);
    app.put("/api/movie/:movieId", MovieController.updateMovie);
    app.delete("/api/movie/:movieId", MovieController.deleteMovie);
}
