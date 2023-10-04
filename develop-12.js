/** 
 * http 서버를 만들기 위해 내장 모듈인 http를 가져오기(import)하였다.
 * 프로젝트의 파일시스템에 접근하기 위해 fs모듈을 가져오기(import)하였다.
 */

 const http = require('http')
 const fs = require('fs')
 
 /**
  * http 모듈은 다양한 메서드들을 지원한다.
  * http 중에서 대표적인 '서버를 만드는' 메서드 createServer를 아래에 사용했다.
  * createServer는 하나의 매개변수만 요구하며, 그 하나의 매개변수는 콜백함수 방식을 원한다.
  * 콜백함수는 두 개의 매개변수를 처리할 수 있다.
  * 위 사항을 외우는 것은(자주 사용하여 외워지는 일은 흔해도) 큰 문제가 될 수 있다.(계속 업테이트 하기 때문)
  */
 
 http.createServer(function(request, response){
   // create의 콜백함수 첫 번째 매개변수로 명명한 request가 무엇을 주는지 확인한다.
   // 웹사이트에 접속(요청)하는 행위가 일어났을 때 아래 console.log() 두 개가 실행된다.
   console.log(request.method);
   console.log(request.url);
 
   /** 
    * 'content-type'은 http, protocol이 원하는 값으로
    * statusCode(접속코드)와 함께 명시해주는 규칙이다.
    * http를 자주 활용하는 우리에게는 매우 익숙해지는 속성 중 하나이다.
    */
   let writeHeadObject = {
     'Content-type': 'text/html'
   }
   response.writeHead(200, writeHeadObject);
   // 200(정상적으로 접속되었다는 코드)
   // 컨텐츠타입은 html이라는 두 번째 매개변수 객체타입
 
   /**
    * file system 모듈을 사용하여 미리 정적으로 만들어진 index.html 파일을 콜백함수로 읽어들인 것을 '응답 데이터'로 활용한 예시이다.
    */
   fs.readFile("./index.html", "utf-8", function(err, data){
     if(err){
       console.error('파일을 읽지 못했습니다.');
     } else{
       response.end(data);
     }
     })
   }).listen(8080);