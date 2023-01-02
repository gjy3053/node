var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", (req, res) => {
  sql = "SELECT * FROM board";
  pool.query(sql, function (err, results, fields) {
    res.render("board.ejs", { list: results });
  });
}); //전체조회

module.exports = router;
