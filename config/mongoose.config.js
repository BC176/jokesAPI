const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connection established'))
    .catch(err => console.log('DB connection not established', err));