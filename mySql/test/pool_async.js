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

function query(sql, data = null) {
  return new Promise((resolve, reject) => {
    pool.query(sql, data, (err, results, field) => {
      resolve(results);
    });
  });
}

module.exports = { pool, query }; //원래는 pool:pool, query:query 인데 필드명과 변수명이 같아서 생략가능
