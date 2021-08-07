const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/joke", JokesController.getAllJokes);
    app.post("/api/joke", JokesController.addNewJoke);
    app.get("/api/joke/:jokeId", JokesController.getJokeByID);
    app.put("/api/joke/:jokeId", JokesController.updateJoke);
    app.delete("/api/joke/:jokeId", JokesController.deleteJoke);
};