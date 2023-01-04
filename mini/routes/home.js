var express = require("express");
const pool = require("../pool");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home.ejs", {
    islogin: req.session.islogin,
    id: req.session.userid,
  });
});

router.post("/", (req, res, next) => {
  req.session.destroy(); //destory()함수를 사용해서 세션 삭제
  res.redirect("/home");
});

module.exports = router;
