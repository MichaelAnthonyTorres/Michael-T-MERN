const JokeController = require("../controllers/jokes.controller.js");

module.exports = (app) => {
    app.get("/api/joke", JokeController.getAllJokes);
    app.post("/api/joke", JokeController.addJoke);
    app.get("/api/joke/:id", JokeController.getOneJoke);
    app.put("/api/joke/:id", JokeController.updateJoke);
    app.delete("/api/joke/:id", JokeController.deleteJoke);
}