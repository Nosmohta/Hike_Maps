"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {

    let mapid = req.body.pathname.replace("/maps/", "");
    console.log(mapid)

    knex
      .select('path')
      .from( 'map')
      .where( 'id' , mapid )
      .then((results) => {
        console.log("sending ajax response from api/maps/:mapid", (results[0].path))
        res.json(results[0].path);
    });

  });

  return router;
}