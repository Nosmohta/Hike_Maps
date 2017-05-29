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

  router.get("/:mapid", (req, res) => {
    let mapid = req.params.mapid;

    knex
      .select()
      .from( 'map')
      .where( 'id' , mapid )
      .then((results) => {
        res.json(results[0]);
    });

  });

  router.get("/:mapid/path", (req, res) => {
    let mapid = req.params.mapid;

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