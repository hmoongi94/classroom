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

// *객체를 하나 넣었을 때 key를 뽑을 수 있는 함수 제작
// *그 후에 object[key]를 사용해 value값을 비교
export function ObjectExtractKey(object){
  let objectKey = []
  for (const key in object){
    objectKey.push(key)
  }
  return objectKey
}

//* 매개변수가 key1, key2를 적으면 
//* key1에 대한 value, key2에 대한 value를 비교
//* 한 후에, result{ common: [], different: [] }
//* 를 return함.
export function CompareValueWord(key1, key2) {
  try {
    if (!typeof (key1) === "string" || !typeof (key2) === "string") {
      throw new Error(`CompareValueWord 매개변수에 들어가는 ${key1}과 ${key2}는 문자열이 아닙니다.`)
    } else {
      const splitWord1 = key1.split(' ')
      const splitWord2 = key2.split(' ')

      const commonWords = []
      const differentWords = []

      // splitWord1 배열에 forEach() 메서드를 사용해
      // splitWord1단어와 splitWord2배열과 비교한다.
      // include(splitWord1)을 써서 splitWord2배열에 있는지 찾아낸다.
      splitWord1.forEach((word) => {
        // if/else문으로 value1을 value2와 비교
        // 공통단어, 다른단어 변수에 넣어줌.
        // ?문제1. value2의 다른단어를 넣어줘야됨.
        if (splitWord2.includes(word)) {
          commonWords.push(word)
        } else {
          differentWords.push(word)
        }
      })

      //  ??문제1. 해결
      splitWord2.forEach((word) => {
        if (splitWord1.includes(word) === false) {
          differentWords.push(word)
        }
      })


      // console.log(commonWords, differentWords)
      // ? 문제2. 두개의 값을 리턴하기 위해 wrapping을 해줌
      const result = { common: commonWords, different: differentWords }
      return result
    }
  }

  catch (error) {
    console.error(Error.message)
  }
}

export function ArrayPushArray(targetArray, addingArray ){
  for(let i=0; i<addingArray.length; i++){
    targetArray.push(addingArray[i])
  }
  return targetArray
}

// console.log(CompareValueWord(testObject.key1.key1, testObject.key1.key2).common)
// console.log(CompareValueWord(testObject.key1.key1, testObject.key1.key2).different)