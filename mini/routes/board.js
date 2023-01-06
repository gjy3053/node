var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", (req, res) => {
  sql =
    "SELECT no, title, date_format(day, '%Y-%m-%d')day, contents, id FROM board";
  pool.query(sql, function (err, results, fields) {
    res.render("board.ejs", {
      list: results,
      islogin: req.session.islogin,
      id: req.session.userid,
    });
  });
}); //전체조회

router.post("/find", (req, res) => {
  const find = req.body.find;
  sql =
    "SELECT no, title, date_format(day, '%Y-%m-%d')day, contents, id FROM board where title like concat('%', ? '%')";
  pool.query(sql, find, function (err, results, fields) {
    if (results) {
      res.render("board.ejs", {
        list: results,
        islogin: req.session.islogin,
        id: req.session.userid,
      });
    }
  });
});
module.exports = router;
