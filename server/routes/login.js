const express       = require("express");
const app           = express();
const router        = express.Router();
const bodyParser    = require("body-parser");


router.get("/", ( req, res) => {
  res.send("on the login page");
})


module.exports = router