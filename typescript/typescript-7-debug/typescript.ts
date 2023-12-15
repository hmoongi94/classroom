function addTs(a:number, b:number){
  if(typeof(a)=== 'number' && typeof(b)==='number'){
    return a+b
  }
}

console.log(addTs(1,2)); // 3,정상 출력됨
console.log(addTs('a','b'))
// 에디터에서도, 콘솔 출력에서도 어디가 에러가 발생하는 원인인지 알려줌