const express = require("express");
const pool = require("../mysql/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const sql = "select * from customers";
  pool.query(sql, (err, result) => {
    //ejs 템플릿 페이지
    console.log(result);
    res.render("customers", { list: result });
  });
});
module.exports = router;
