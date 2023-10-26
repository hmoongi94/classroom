const http = require('http');
const fs = require('fs');
// 편리한 사용을 위해 url 내장 모듈을 사용했다.
const url = require('url');


const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true); // 구문을 분석하고 URL 객체를 반환한다.
  // url 내장 모듈이 지원하는 특정 메서드로 parse 는 '구문 분석', 즉 파싱을 편리하게 해준다.
  console.log("parsedUrl -> ", parsedUrl);

  // 가독성을 위한 단순 함수 래핑
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겻습니다.');
  }

  console.log("어떤 요청이 들어오는지 확인", "url -> ", req.url, "method -> ",  req.method);
  

  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./static/index.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/css/style.css' && req.method === 'GET') {
    fs.readFile('./static/css/style.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else if (req.url === '/js/index.js' && req.method === 'GET') {
    fs.readFile('./static/js/index.js', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(data);
    });
  } else if (req.method === "GET" && parsedUrl.pathname === "/login") {
    // 해당 조건식은 사용자가 입력 요청이 들어오면 실행된다.
    // 사용자와 '자동화된 서버'의 상호작용 중 대표적인 사례
    console.log("form 입력으로부터 받은 데이터 확인 -> ", parsedUrl.query);
    console.log("form 입력으로부터 받은 데이터 확인 -> ", parsedUrl.query.username);
    console.log("form 입력으로부터 받은 데이터 확인 -> ", parsedUrl.query.password);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("login success!!");

  } 
  else {
    res.writeHead(404);
    res.end('Not Found');
  }

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`);
});
