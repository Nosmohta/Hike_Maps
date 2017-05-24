app.get("/", (req, res) => {
    res.redirect("/maps")
})

app.use("/maps", require("./routes/maps"))
app.use("/users", require("./routes/users"))
app.use("/login", require("./routes/login"))


const router        = express.Router();


FROM USERS ROUTES

// const express       = require("express");
// const app           = express();
// const router        = express.Router();
// const bodyParser    = require("body-parser");
// const db            = require("../db/queries");


// router.get("/", ( req, res) => {
//   res.send("on the users page");
// })


// module.exports = router
