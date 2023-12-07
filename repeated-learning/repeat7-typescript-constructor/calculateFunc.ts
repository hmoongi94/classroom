//사칙연산 함수 정의
function add(a:number, b:number): number{
  return a+b
}

function subtract(a:number, b:number): number{
  return a-b
}

function multiply(a:number, b:number): number{
  return a*b
}

function divide(a:number, b:number): number{
  if(b===0){
    throw new Error('0으로 나눌 수 없습니다.')
  }
  return a/b;
}