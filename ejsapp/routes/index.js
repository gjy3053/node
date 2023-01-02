var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" }); //태그 그려서 보내는 거는 render함수  , index.ejs
});

module.exports = router;
