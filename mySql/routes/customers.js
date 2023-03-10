//서버에서 라우터가 처리하는 파일 (fetch에서 라우터로 갔다가 db로 갔다가) 모든요청은 app.js로 온다...

var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

router.get("/", async (req, res) => {
  sql = "SELECT * FROM customers";
  let result = await pool.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
}); //전체조회

router.get("/:id", (req, res) => {
  const id = req.params.id;
  sql = "SELECT * FROM customers where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]);
  });
}); //단건조회

//등록
router.post("/", (req, res) => {
  //req.body
  let sql = "insert into board set ?";
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

//수정
router.put("/:id", (req, res) => {
  let sql = "update customers set ? where id = ?";
  let data = [req.body, req.params.id];
  pool.query(sql, data, function (err, results, fields) {
    let resultData = {};
    if (err) {
      console.log(err);
      throw err;
    } else if (results.changedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
  });
});

//삭제
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
