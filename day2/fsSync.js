/*fsSync.js 동기식 = blocking 함수*/
const fs = require("fs"); //html <script src='____.js'와 같은 용도
let data = fs.readFileSync("./template/test.txt", "utf8");
console.log(data);
console.log("the end");
