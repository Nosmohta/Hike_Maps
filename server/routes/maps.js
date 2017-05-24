const express       = require("express");
const router        = express.Router();
const bodyParser    = require("body-parser");
const db            = require("../../db/queries")


router.get("/", ( req, res) => {
  db.searchName("Lincoln", (data) => {
    console.log("sample db query:", data)
    res.send("on the maps page");
  })
})

module.exports = router