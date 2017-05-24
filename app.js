"use strict";


const PORT          = 8080;
const express       = require("express");
const app           = express();
const bodyParser    = require("body-parser");
const router        = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.redirect("/maps")
})

app.use("/maps", require("./server/routes/maps"))
app.use("/users", require("./server/routes/users"))
app.use("/login", require("./server/routes/login"))


app.listen(PORT, () => {
      console.log("Example app listening on port " + PORT);
});

