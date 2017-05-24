"use strict";

const express       = require("express");
const app           = express();
const router        = express.Router();
const bodyParser    = require("body-parser");
const db            = require("../../db/queries");


router.get("/", ( req, res) => {
  res.send("on the users page");
})


module.exports = router




// const express = require('express');
// const router  = express.Router();

// module.exports = (knex) => {

//   router.get("/", (req, res) => {
//     knex
//       .select("*")
//       .from("users")
//       .then((results) => {
//         res.json(results);
//     });
//   });

//   return router;
// }
