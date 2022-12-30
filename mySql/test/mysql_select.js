const mysql = require("mysql"); //mysql 모듈 로드 (내장되어 있지 않으므로 npm install mysql)
//cd test    node mysql_select.js

//mysql 접속정보
const conn = {
  host: "localhost",
  post: "3306",
  user: "dev01",
  password: "1234",
  database: "dev", //연결한 이름
};

let connection = mysql.createConnection(conn); //DB커넥션 생성 ,연결준비
connection.connect(); //DB접속, 연결
let id = 6;
let name = "고지연";
let data = [id, name]; //만약 값이 하나면 배열로 보낼 필요 없다
sql = "SELECT * FROM customers where id = ? and name = ?";
connection.query(sql, data, function (err, results, fields) {
  //db서버로 쿼리보냄
  console.log(results); //결과받아오면 처리
});

connection.end(); //DB접속 종료 , 종료해야 다른 사람이 접속가능

//커넥트-> 쿼리수행 -> 결과처리 -> 종료
