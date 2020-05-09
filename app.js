//create Express server
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;

const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require('./models/User');

//connect mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

//routes
app.get("/", (req, res) => {
    const user = new User({
        handle: "jim",
        email: "jim@jim.jim",
        password: "jimisgreat123"
    })
    user.save();
    res.send("Hello World!");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);


//port
const port = process.env.PORT || 5000;

//socket, listen for connections on path
app.listen(port, () => console.log(`Listening on port ${port}`));

