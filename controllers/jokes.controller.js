const Joke = require("../models/jokes.models")

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json({ jokes: allJokes }))
        .catch((err) => res.json({ errMsg: err }));
};

const addNewJoke = (req, res) => {
    const { body } = req;
    Joke.create({
        joke: req.body.joke,
        punchline: req.body.punchline,
    })
        .then((newJoke) => res.json({ newJoke: newJoke }))
        .catch((err) => res.json({ errorMessage: err }));
};

const getJokeByID = (req, res) => {
    Joke.findOne({ _id: req.params.jokeId })
        .then(joke => res.json({ joke: joke }))
        .catch((err) => res.send(err));
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.jokeId },
        { punchline: req.body.punchline },
        { new: true, runValidators: true }
    )
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.send(err));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne(
        { _id: req.params.jokeId }
    )
        .then((deletedJoke) => res.json({ deletedJoke: deletedJoke }))
        .catch((err) => res.json({ errMsg: err }));
};

module.exports = {
    getAllJokes,
    addNewJoke,
    getJokeByID,
    updateJoke,
    deleteJoke,
};