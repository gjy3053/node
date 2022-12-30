const mysql = require("mysql"); //mysql 모듈 로드 (내장되어 있지 않으므로 npm install mysql)
//cd test    node mysql_select.js
const conn = {
  host: "localhost",
  post: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); //DB접속

let sql = "insert into customers set ?"; //insert는 where안됨
const data = {
  // id: 3,
  name: "이순신",
  email: "choi@naver.com",
  phone: "010-2222-2222",
  address: "",
};

connection.query(sql, data, function (err, results, fields) {
  /* if (err) {
    console.log(err);
  } */
  console.log(results);
});

connection.end(); //DB접속 종료

//affectedRows 있으면 성공
