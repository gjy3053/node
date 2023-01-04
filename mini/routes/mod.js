var express = require("express");
const pool = require("../pool");
var router = express.Router();

//수정페이지 이동
router.get("/:no", (req, res) => {
  sql = "SELECT * FROM board where no =?";
  const no = req.params.no;
  pool.query(sql, no, function (err, results, fields) {
    res.render("mod.ejs", { list: results, id: req.session.userid });
  });
});
//수정
router.put("/:no", (req, res) => {
  let sql = "update board set ? where no = ?";
  let data = [req.body, req.params.no];
  pool.query(sql, data, function (err, results, fields) {
    let resultData = {};
    if (results.changedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
  });
});

module.exports = router;
