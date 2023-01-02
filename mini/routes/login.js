var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/:id/", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  sql = "SELECT * FROM login where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (results.length > 0) {
      if (results[0].pw == pw) {
        console.log("로그인완료");
      } else {
        //no id
        console.log("로그인실패");
      }
    }
  });
}); //단건조회

module.exports = router;
