/*fs.js  비동기식 = non-blocking 함수 = 콜백함수이용*/
const fs = require("fs");
fs.readFile("./template/test.txt", "utf8", (err, data) => console.log(data)); // 명령이 하나뿐이라면 중괄호 생략가능
console.log("the end");
