var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", (req, res) => {
  sql = "SELECT * FROM board";
  pool.query(sql, function (err, results, fields) {
    res.render("board.ejs", {
      list: results,
      islogin: req.session.islogin,
      id: req.session.userid,
    });
  });
}); //전체조회

/* router.post("/search", (req, res) => {
  let find = req.body.search;
  sql = "select * from board where title like concat('%', ? '%')";
  pool.query(sql, find, (err, results, fields) {
    if(results){
      res.render("home", results)
    } else res.render("없음")
  })

}); */
module.exports = router;
