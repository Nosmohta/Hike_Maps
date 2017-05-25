"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("coord")
      .from( "path")
      .where( 'id' , 1)
      .then((results) => {

        res.json(results);
    });
  });

  return router;
}