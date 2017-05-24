const express       = require("express");
const router        = express.Router();
const bodyParser    = require("body-parser");


router.get("/", ( req, res) => {
  res.send("on the maps page");
})

module.exports = router