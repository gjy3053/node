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

//삭제
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  let sql = "delete from board where no = ?";
  pool.query(sql, no, function (err, results, fields) {
    res.statusCode = 200;
    res.send(results);
  });
});

module.exports = router;
