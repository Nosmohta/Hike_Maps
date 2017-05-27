"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {

    let mapid = req.body.pathname.replace("/maps/", "");

    knex
      .select('coord')
      .from( 'path')
      .where( 'id' , mapid )
      .then((results) => {
        console.log("sending /maps/:mapid results")
        res.json(results[0].coord);
    });

  });

  return router;
}