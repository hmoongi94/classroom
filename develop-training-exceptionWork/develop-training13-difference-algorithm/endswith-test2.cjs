const fs = require('fs')
const path = require('path')

function diffLogic(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`)
  } else {
    let result = {}

    // inputJSONData 객체로 가져오기
    const inputJSONData = JSON.parse(fs.readFileSync(path.join(__dirname, `${inputJSONPath}`), 'utf-8'))
    console.log(inputJSONData)

    const outputJSONData = JSON.parse(fs.readFileSync(path.join(__dirname, `${outputJSONPath}`) , 'utf-8'))
    console.log(outputJSONData)

    return result
  }
}

const inputJSONPath = './data/fromDB-data.json'
const outputJSONPath = './data/differences.json'

diffLogic(inputJSONPath,outputJSONPath)

// package.json에 type:module을 하면
// require를 쓸 때 확장자를 cjs로 바꿔줘야한다.?