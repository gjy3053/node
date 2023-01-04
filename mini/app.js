var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const fileStore = require("session-file-store")(session);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var boardRouter = require("./routes/board"); //게시글 조회
var lookRouter = require("./routes/look"); //상세조회
var writeRouter = require("./routes/write"); //글작성
var modRouter = require("./routes/mod"); //글수정
var loginRouter = require("./routes/login"); //로그인홈페이지
var homeRouter = require("./routes/home");
//var proxy = require("express-http-proxy");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 60000, //밀리초
    },
    store: new fileStore(),
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);
app.use("/look", lookRouter);
app.use("/write", writeRouter);
app.use("/mod", modRouter);
app.use("/login", loginRouter);
app.use("/home", homeRouter);
//app.use("/proxy", proxy("https://dgfc.or.kr"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
