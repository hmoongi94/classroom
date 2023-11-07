// const test = '/asfdsajlfkaf/data.json'

// console.log(test.endsWith('.json'))

import fs from "fs"
import path from "path"

function test(inputJSONPath, outputJSONPath) {
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

test("ddafasf.json","dasfsafds.json")