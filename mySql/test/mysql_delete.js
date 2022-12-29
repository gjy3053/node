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

let sql = "delete from customers where id=?";
let data = 3;

connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB접속 종료

//node mysql_delete.js 하고
//affectedRows가 있으면 성공
