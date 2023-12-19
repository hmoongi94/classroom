// 부분 적용 함수를 반환하는 클로저
function createMultiplier(factor) {
  // 외부 함수의 인자 factor를 기억하여 내부 함수에서 재사용
  return function (number) {
    return number * factor;
  };
}

// 2를 곱하는 함수 생성
const double = createMultiplier(2);

// 3을 곱하는 함수 생성
const triple = createMultiplier(3);

// 함수 재사용
console.log(double(5)); // 결과: 10
console.log(triple(5)); // 결과: 15
console.log(double(10)); // 결과: 20
console.log(triple(10)); // 결과: 30