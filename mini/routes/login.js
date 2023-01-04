var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  //const name = req.body.name;
  sql = "SELECT * FROM login where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (results.length > 0) {
      if (results[0].pw == pw) {
        console.log("로그인완료");
        req.session.islogin = true;
        req.session.userid = id;
        res.send({ result: true });
      } else {
        console.log("로그인실패");
        res.send({ result: false });
      }
    }
  });
});

module.exports = router;
