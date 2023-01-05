var express = require("express");
const pool = require("../pool");
var router = express.Router();

//단건조회
router.get("/:no", (req, res) => {
  sql = "SELECT * FROM board where no =?";
  const no = req.params.no;
  pool.query(sql, no, function (err, results, fields) {
    res.render("look.ejs", {
      list: results,
      islogin: req.session.islogin,
      id: req.session.userid,
    });
  });
});

//댓글 조회
router.get("/:no/comment", (req, res) => {
  sql = "SELECT * FROM comment where board_no =?";
  const board_no = req.params.no;
  pool.query(sql, board_no, function (err, results, fields) {
    res.send(results);
  });
});

//삭제
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  let sql = "delete from board where no = ?";
  pool.query(sql, no, function (err, results, fields) {
    res.statusCode = 200;
    res.send(results);
  });
});

//댓글 등록
router.post("/:no/save", (req, res) => {
  let sql = "insert into comment set ?";
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

module.exports = router;
