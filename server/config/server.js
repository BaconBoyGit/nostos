var express = require('express');
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var async = require('async');
var env = require('dotenv').load();        // Used to handle environment variables
var sec = require('../secrets').secret     // Our secret for the session
//Models
let models = require("../app/models")

// assigns the express module to a variable express
var app = express();

// Parse incoming information into JSON using BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize passport and the express session and passport session,
// then, add them as middleware
app.use(session({ secret: sec, resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Define an environemnt with a port
const port = process.env.PORT || 5000;

app.listen(port, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

// Top level route
app.get('/', function(req, res) {

    res.send('Welcome to Passport with Sequelize');

});
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


// A simple get request which returns a specified string
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

