// Minam의 기능을 함수로 구현
function sayHelloMinam(){
  return "hello hongmoongi"
}

// Chunam의 기능을 팩토리 함수로 구현
function createChunam(){
  // 리턴이 객체이다.
  return{
    sayHello:function(){
      return "bye hongmoongi"
    }
  }
}

// Minam 함수 사용예시
console.log(sayHelloMinam()) //"hello hongmoongi" 출력

// Chunam 팩토리 함수를 사용하여 객체 생성 및 메서드 사용 예시
const chunamInstance = createChunam()
console.log(createChunam())
// class가 아니므로 new라는 키워드를사용하진 않앗지만
// 사실상 함수를 호출하자마자 객체가 생성되는 것이므로
// class와 비슷한 방식
console.log(chunamInstance.sayHello())