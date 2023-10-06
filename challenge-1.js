function lifeisLoop(callback, interval){
  function  repeat(){
    callback();
    // 위에서 만들어진 callback 함수는 repeat 함수 내부에서 실행된다.
    setTimeout(repeat, interval);
    // 정해진 시간이 지나면 repeat 함수를 다시 실행한다.
    // '내가 나를' 호출하는 형태이다.
  }
  setTimeout(repeat,interval);
}

  lifeisLoop(function(){
    console.log("돌고");
  },2000)
