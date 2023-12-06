function loadFunction(name: string):string{
  console.log(`${name} 함수가 로드되었습니다.`)
  return "loadFunction"
}

function functionA():string{
  console.log('functionA 함수영역')
  loadFunction('functionA')
  return 'functionA의 값'
}

function functionB():string{
  console.log('functionB 함수영역')
  loadFunction('functionB')
  return 'functionB의 값'
}

// function main():Object{
//   console.log('main 함수영역')
//   console.log(`return 값: ${functionA()}`)
//   console.log(`return 값: ${functionB()}`)
//   // return `main함수의 값: ${functionA()}`
//   return [functionA(), functionB()]
// }

function main(): { functionA: string; functionB: string } {
  console.log('main 함수영역');
  return {
    functionA: functionA(),
    functionB: functionB(),
  };
}

console.log(main())