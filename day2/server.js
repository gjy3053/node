const http = require("http"); //http.js(모듈) 안에 http 객체선언되어 있다  객체참조
const fs = require("fs"); //const선언문은 변경 불가(중요한 데이터때)
//서버 선언(클라이언트 요청 시 호출(처리)될 핸들러)
//readFile(err, data)처럼 이름을 바꿔도(req, res) 상관없다.
const server = http.createServer((req, res) => {
  const myUrl = new URL("http://localhost:3000" + req.url); //new선언문으로 객체를 생성한다
  console.log("pathname", myUrl.pathname);
  console.log("searchParams", myUrl.searchParams);
  if (myUrl.pathname.startsWith("/page")) {
    //page로 시작하는 페이지
    const pagename = "./template" + myUrl.pathname.substring(5) + ".html"; //html파일로 5번째 줄부터 템플릿의 파일이름
    fs.readFile(pagename, "utf8", (aaa, bbb) => {
      //첫번째 자리는err=오류가뜨면 에러메세지  두번째 자리는data=들어올 내용
      res.end(bbb); //변수값
    });
  } else {
    res.end("no path");
  }
});
server.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
