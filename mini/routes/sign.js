var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("sign.ejs");
});

router.post("/", (req, res) => {
  let sql = "insert into login set ?";
  // console.log(req.body);
  pool.query(sql, req.body, function (err, results, fields) {
    res.send(results);
    // res.redirect("/home");
  });
});
module.exports = router;
