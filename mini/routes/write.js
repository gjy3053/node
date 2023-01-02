//서버에서 라우터가 처리하는 파일 (fetch에서 라우터로 갔다가 db로 갔다가) 모든요청은 app.js로 온다...

var express = require("express");
const pool = require("../pool");
var router = express.Router();

//등록페이지 이동
router.get("/", (req, res) => {
  sql = "SELECT * FROM board";
  pool.query(sql, function (err, results, fields) {
    res.render("write.ejs", "");
  });
});

//등록처리
router.post("/save", (req, res) => {
  let sql = "insert into board set ?";
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

module.exports = router;
