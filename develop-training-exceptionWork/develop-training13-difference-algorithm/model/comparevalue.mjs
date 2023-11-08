import fs from "fs"
import path from "path"

const testObject = {
  key1: { "key1": "비교해볼 단어들 아무거나 쓰자", "key2": "비교당할 단어들 아무거나 써보자", "key3": "value3" },
  key2: "두 번째 키에대한 value",
  key3: "세 번째 키에 대한 value"
}


// export function ObjectExtractValue(object) {

//   let objectKey = []
//   for (const key in object) {
//     const value = object[key]

//     objectKey.push(value)
//   }
//   console.log(objectKey)
// }

// ObjectExtractValue(testObject)
// ObjectExtractValue(testObject.key1)

//* 매개변수가 key1, key2를 적으면 
//* key1에 대한 value, key2에 대한 value를 비교
//* 한 후에, result{ common: [], different: [] }
//* 를 return함.
export function CompareValueWord(key1, key2) {
  const splitWord1 = key1.split(' ')
  const splitWord2 = key2.split(' ')

  const commonWords = []
  const differentWords = []

  // splitWord1 배열에 forEach() 메서드를 사용해
  // splitWord1단어와 splitWord2배열과 비교한다.
  // include(splitWord1)을 써서 splitWord2배열에 있는지 찾아낸다.
  splitWord1.forEach((word)=>{
    // if/else문으로 value1을 value2와 비교
    // 공통단어, 다른단어 변수에 넣어줌.
    // ?문제1. value2의 다른단어를 넣어줘야됨.
    if(splitWord2.includes(word)){
      commonWords.push(word)
    } else{
      differentWords.push(word)
    }
  })

    //  ??문제1. 해결
  splitWord2.forEach((word)=>{
    if(splitWord1.includes(word)===false){
      differentWords.push(word)
    }
  })


  // console.log(commonWords, differentWords)
  // ? 문제2. 두개의 값을 리턴하기 위해 wrapping을 해줌
  const result = {common:commonWords, different:differentWords}
  return result
}

// console.log(CompareValueWord(testObject.key1.key1, testObject.key1.key2).common)
// console.log(CompareValueWord(testObject.key1.key1, testObject.key1.key2).different)

