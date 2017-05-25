const express       = require("express");
const router        = express.Router();




module.exports = (knex) => {

  router.get("/", (req, res) => {
       res.render("maps_index");
  });

  return router;
}

