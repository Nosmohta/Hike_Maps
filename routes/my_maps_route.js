"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {



  router.post("/", (req, res) => {

    let userid = req.body.pathname.replace("/user/", "");

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
