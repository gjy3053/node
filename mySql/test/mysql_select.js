const mysql = require("mysql"); //mysql 모듈 로드 (내장되어 있지 않으므로 npm install mysql)
//cd test    node mysql_select.js

//mysql 접속정보
const conn = {
  host: "localhost",
  post: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); //DB접속

sql = "SELECT * FROM customers";
connection.query(sql, function (err, results, fields) {
  console.log(results);
});

connection.end(); //DB접속 종료
