const express       = require("express");
const app           = express();
const router        = express.Router();
const bodyParser    = require("body-parser");
const db            = require("../db/queries");
const sessions      = require("express-sessions");


router.get("/", ( req, res) => {
  res.send("on the login page");
})

router.post("/", ( req, res) => {
  //check login status use utilities
  //Add seesions cookie
  res.send("you're logged in, check your cookies for a sessions cookie");
})



module.exports = router