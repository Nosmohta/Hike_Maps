"use strict";

const express = require('express');
const router  = express.Router();
const session     = require('express-session')
const fileUpload  = require('express-fileupload');

module.exports = (knex) => {



  router.get("/userid/", (req, res) => {

    let userid = req.session.userID;

    knex
      .select('map.title', 'map.id')
      .from('map')
      .innerJoin ('users','map.user_id', 'users.id')
      .where('users.name', userid )
      .then((results) => {

        res.json(results);
    });



  });

  router.post("/userid/mapid", (req, res) => {
    let userid = req.session.userID;

    knex
      .select()
      .from('map')
      .where('id', req.body.mapid )
      .then((results) => {

        res.json(results);
    });
  });


  router.post("/userid/newhike", (req, res) => {
    let userid = req.session.userID;
    console.log( "userid:", userid)
    console.log("newhike");
    console.log(req.body.title);




    knex
      .select()
      .from('map')
      .where('id', req.body.mapid )
      .then((results) => {

        res.json(results);
    });
  });

  return router;
}
