const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
    {
        joke: { type: String },
        punchline: { type: String },
    },
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;