const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res)=> {

  // 가독성을 위한 단순 함수 wrapping
  function serverErrorLog(){
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.')
  }

  console.log("어떤요청이 들어오는지 확인", "url ->", req.url, "method-> ", req.method)
  // 라우팅 처리 제작 두개의 요청 데이터를 확인해야 한다.
  // 1. 요청 URL
  // 2. 요청 메서드
  if(req.url === '/' && req.method === 'get'){
    fs.redFile('./static/index.html', 'utf-8', (err,data)=>{
      if(err){
        serverErrorLog();
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data)
    });
  } 
})