"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const fileUpload  = require('express-fileupload');
const sass        = require("node-sass-middleware");
const session     = require('express-session')
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const loginRoutes    = require("./routes/login_route");
const mapsRoutes     = require("./routes/maps_route");
const usersRoutes = require("./routes/users_route");

// Concise output colored by response status for development use.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/styles", sass({
  src: __dirname + "/SASS",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use("/public", express.static("public"));

// session cookie config
app.use(session( {
    name: 'session',
    secret: "bigsecret",
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000
  }
));

// Mount all resource routes
app.use("/api/maps", mapsRoutes(knex));
app.use("/api/users", usersRoutes(knex));
app.use("/api/login", loginRoutes(knex));


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
  res.render("maps_show_view");
});

// login Page
app.get("/login",  (req, res) => {

  res.render("login_view");
});

// My_Maps Page
app.get("/users/:userid",  (req, res) => {
  let userID = req.session.userID;
  if ( userID === req.params.userid){
    res.render("my_maps_view");
  } else {
    res.send("you need to login first.")
  }

});

// login
app.post("/users/:userid", (req, res) => {
  console.log("user name:", req.params.userid);
  let userid = req.params.userid;
  req.session.userID = userid;
  console.log("user cookie", userid);
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
