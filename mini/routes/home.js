var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home.ejs", {
    islogin: req.session.islogin,
    id: req.session.userid,
  });
});

module.exports = router;
