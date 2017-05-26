"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const session     = require('express-session')
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const userRoutes    = require("./routes/user");
const mapsRoutes     = require("./routes/maps");
const mapsviewRoutes = require("./routes/maps_view");
const editviewRoutes = require("./routes/edit_view");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for
//         client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/SASS",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use("/public", express.static("public"));

// Mount all resource routes
app.use("/api/users", userRoutes(knex));
app.use("/api/maps/mapid", mapsviewRoutes(knex));
app.use("/api/maps", mapsRoutes(knex));
app.use("/api/user/:userid/:mapid", editviewRoutes(knex));

// session cookie config
app.use(session( {
    name: 'session',
    secret: "bigsecret",
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000
  }
));


// Home page
app.get("/", (req, res) => {
  res.redirect("/maps");
});

// Maps page
app.get("/maps", (req, res) => {
  res.render("maps_index");
});

// View Map Page
app.get("/maps/:mapid",  (req, res) => {
  res.render("maps_view");
});

// login Page
app.get("/users",  (req, res) => {
  res.render("login_view");
});

// Create/Edit Map Page
app.get("/users/:userid",  (req, res) => {
  res.render("edit_view");
});

// login
app.post("/users/:userid", (req, res) => {
  console.log("user name:", req.params.userid);
  let userid = req.params.userid;
  req.session.userID = userid;
  res.redirect("/users/" + userid)
});

// logout
app.post("/logout",(req, res) => {
  req.session.destroy(function(err) {
    console.log("logout. Check cookies")
    res.redirect("/maps");
  })
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
