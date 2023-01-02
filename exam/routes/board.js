var express = require("express");
const pool = require("../pool");
var router = express.Router();

sql = {
  select: "SELECT * FROM board order by title",
  selectOne: "SELECT * FROM board where no = ?",
  insert: "insert into board set ?",
  update: "update board set ? where no = ?",
  delete: "delete from board where no = ?",
};

//전체조회
router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    res.json(results);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, fields) {
    res.send(results);
  });
});

//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, function (err, results, fields) {
    res.json(results);
  });
});

//삭제
router.delete("/:no", (req, res) => {
  //왜안될까? customer.js보기
  const no = req.params.no;
  pool.query(sql.delete, no, function (err, results, fields) {
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

module.exports = router;
