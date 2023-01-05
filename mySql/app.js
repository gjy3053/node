var createError = require("http-errors");
var express = require("express");
var path = require("path");
//var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var customersRouter = require("./routes/customers"); //라우터 선언하고 app.use는 사용하겠다..
var booksRouter = require("./routes/books");

const session = require("express-session");
const fileStore = require("session-file-store")(session);

var app = express(); //createServer()  서버역할

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); //view엔진을 뭐쓸꺼다

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true, //https일때 쿠기 저장됨
      maxAge: 30 * 24 * 60 * 60, //밀리초
    },
    store: new fileStore(),
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter); //라우터 추가, 젤 중요하다...
app.use("/users", usersRouter);
app.use("/customers", customersRouter);
app.use("/books", booksRouter);

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
