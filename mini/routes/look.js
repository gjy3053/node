var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/:no", (req, res) => {
  sql = "SELECT * FROM board where no =?";
  const no = req.params.no;
  pool.query(sql, no, function (err, results, fields) {
    res.render("look.ejs", { list: results });
  });
}); //전체조회

module.exports = router;
