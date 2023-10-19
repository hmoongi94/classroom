const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req, res) => {
  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겻습니다.');
  }

  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('./static/loginForm.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/loginForm.css' && req.method === 'GET') {
    fs.readFile('./static/loginForm.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    const querystring = require('querystring');
    
    req.on('data', (chunk) => {
      body += chunk.toString(); //데이터를 문자열로 변환
      console.log(chunk)
      console.log(body)
      
    })
    
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      console.log(parsedBody)
      fs.readFile("./static/loginSuccess.html", "utf8", (err, data) => {
        const { username, password1, password2, email } = parsedBody;
        if (err) {
          serverErrorLog();
        } else if(password1 === password2 ){
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data)
        } else{
          res.writeHead(500, {"content-Type":"text/plain"})
          res.end("로그인정보가 틀렸습니다.")
        }
      })
    })
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`cli 창에서 컨트롤 누른후  옆에 포트 누르면 편리하게 확인 -> http://localhost:${PORT}/`);
});
