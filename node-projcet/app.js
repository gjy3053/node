import express from "express";
import boardRouter from "./routes/board.js";
import boardCustomer from "./routes/customer.js";
const app = express(); //객체생성
const port = 3000;
//http://localhost:3000/images/info.html

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//정적
app.use(express.static("public")); //public폴더 안에 있는거 다가져옴
//동적
app.get("/login", function (req, res) {
  console.log(req.query.email);
  console.log(req.query.pw);
  res.send("로그인완료");
});
app.use("/board", boardRouter);
app.use("/customer", boardCustomer);
app.use(function (err, req, res, next) {
  res.status(500).json({ code: res.statusCode, msg: err.message }); //send는 문자
});
app.get(
  "/example",
  (req, res, next) => {
    throw new Error("에러발생");
    console.log("첫번째 콜백");
    next(); //다음 할 것이 있을 때
  },
  (req, res, next) => {
    res.send("두번째 콜백");
    next();
  }
);
app.get("/", (req, res) => {
  //http.createserver() 와 같음
  res.send("hello world!!!");
});

//acd abcd ab?cd
app.get("/ab+cd", (req, res) => {
  res.send("정규표현식");
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
