"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {



  router.post("/", (req, res) => {
    console.log("POST WHATEVER");
    console.log(req.session.userID);
    let userid = req.session.userID;

    knex
      .select('title', 'id')
      .from('map')
      .where('user_id', userid )
      .then((results) => {

        res.json(results);
    });



  });

  return router;
}
