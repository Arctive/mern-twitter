//create Express server
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

//connect mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

//routes
app.get("/", (req, res) => {
    res.send("New test");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);


//port
const port = process.env.PORT || 5000;

//socket, listen for connections on path
app.listen(port, () => console.log(`Listening on port ${port}`));

