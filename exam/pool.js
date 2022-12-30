const mysql = require("mysql"); //mysql 모듈 로드 (내장되어 있지 않으므로 npm install mysql)
//cd test    node mysql_select.js

//mysql 접속정보
const conn = {
  host: "localhost",
  post: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
};

let pool = mysql.createPool(conn); //DB커넥션 생성

//공통으로 쓰니까 모듈로 만들어서 불러쓰겠다

module.exports = pool; //외부로 내보낼수 있다
