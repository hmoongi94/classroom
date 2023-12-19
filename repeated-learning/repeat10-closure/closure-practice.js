function outerFunction(x) {
  // 내부 함수(innerFunction) 정의
  function innerFunction(y) {
    return x + y; // 외부 함수의 변수 x에 접근
  }

  return innerFunction; // 내부 함수를 반환
}

// outerFunction을 호출하여 클로저 생성
const closureExample = outerFunction(10);
console.log(closureExample)

// 클로저를 사용하여 내부 함수 호출
console.log(closureExample(5)); // 결과: 15