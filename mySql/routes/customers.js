//서버에서 라우터가 처리하는 파일 (fetch에서 라우터로 갔다가 db로 갔다가) 모든요청은 app.js로 온다...

var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

router.get("/", (req, res) => {
  sql = "SELECT * FROM customers";
  pool.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
}); //전체조회
router.get("/:id", (req, res) => {}); //단건조회

//등록
router.post("/", (req, res) => {
  //req.body
  let sql = "insert into customers set ?";
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id = ?";
  pool.query(sql, id, function (err, results, fields) {
    //err는 에러 두번째는 받는 값 세번째는 db에 있는 테이블 정보
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
