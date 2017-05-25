"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex

      .select("title", "id")
      .from("map")
      .then((results) => {

        res.json(results);
    });
  });

  return router;
}