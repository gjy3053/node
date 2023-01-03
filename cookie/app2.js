const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  //쿠키
  console.log("Cookies: ", req.cookies.test);
  res.cookie("test", "test");
  res.send("express");
});

app.listen(3000, () => {
  console.log("Server running http://localhost:3000");
});
