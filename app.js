//create Express server
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;

//connect mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

//routes
app.get("/", (req, res) => res.send("New test"));

//port
const port = process.env.PORT || 5000;

//socket, listen for connections on path
app.listen(port, () => console.log(`Server is running on port ${port}`));

