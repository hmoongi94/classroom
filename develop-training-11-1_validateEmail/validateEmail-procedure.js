function validateEmail(email){
  // 두개의 상태(state) 변수를 만든다.
  let hasAtSign = false
  let hasDot = false

  if(typeof(email)==="string"){
    // 아래의 반복문에 length 기준의 loop을 구성하기 때문에
    // length가 부여되는 문자열만 동작할 수 있도록 조건식을 제작했다.
    for(let i=0; i<email.length; i++){
      let char = email[i];
      if(char==='@'){
        hasAtSign = true;
      }
      if(char==='.'){
        hasDot = true;
      }
    }
    return hasAtSign && hasDot;
  } else {
    console.log(email ="<-이 매개변수는 올바른 데이터타입이 아닙니다.")
  }

}

module.exports = validateEmail