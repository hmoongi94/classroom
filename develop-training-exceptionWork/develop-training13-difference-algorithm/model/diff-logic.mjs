/**
 * @param {JSON, Path} inputJSONdata
 * @param {JSON, Path} outputJSONdata
 * @returns Object
 */

import fs from "fs"
import path from "path"
import { ObjectExtractKey, CompareValueWord, ArrayPushArray } from "./comparevalue.mjs"

export function diffLogic(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`)
  } else {

    //* 1. 두 개의 JSON파일을 읽은 뒤 JSON 객체로 반환
    const inputJSONData = JSON.parse(fs.readFileSync(path.join(`${inputJSONPath}`), 'utf-8'))
    // console.log(inputJSONData)

    const outputJSONData = JSON.parse(fs.readFileSync(path.join(`${outputJSONPath}`), 'utf-8'))
    // console.log(outputJSONData)

    //* 2. inputdata객체의 key값을 뽑아줌.
    const inputDataKey = ObjectExtractKey(inputJSONData)
    // console.log(inputDataKey) [ 'operator' , 'operand']
    //* key값을 확인을 확인하고 Object[key]를 사용해 value값을 구했다.
    const value1 = inputJSONData["operator"]
    const value2 = inputJSONData["operand"]

    //* 공통단어는 outputdata객체에 접근해 samewords에 집어넣어준다. 다른단어는 differencewords에 집어넣는다.
    const commonWord = CompareValueWord(value1, value2).common
    const differenceWord = CompareValueWord(value1, value2).different

    const outputDataKey = ObjectExtractKey(outputJSONData)
    // console.log(outputDataKey) 
    // [ 'sameWords', 'differenceWords' ]

    //* concat()을 사용하면 원래 있던 배열에 추가되는 것이 아니라 추가된 추가한 배열을 새롭게 지정해야된다.
    //* 그래서 배열을 하나하나 push해주는 함수를 만들었다.
    //* 처음 outJSONData 배열을 바꾸고 싶었기 때문.
    ArrayPushArray(outputJSONData['sameWords'], commonWord)
    ArrayPushArray(outputJSONData['differenceWords'], differenceWord)

    //* outputJSONData 문자열로 파싱
    const newData = outputJSONData

    // *처음 outputJSONData배열에 잘 추가되는 것을 확인.
    // console.log(outputJSONData)

    //*outputJSONData를 .json데이터에 fs.writefile을 사용해 추가로 써준다.

    const updatedData = JSON.stringify(outputJSONData, null, 2)

    // 변경된 JSON 데이터를 파일에 씁니다.
    fs.writeFile(outputJSONPath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('파일 쓰기 오류:', err);
      } else {
        console.log('JSON 파일이 성공적으로 갱신되었습니다.');
      }
    });

  }
}


// const inputJSONPath = '../data/fromDB-data.json'
// const outputJSONPath = '../data/differences.json'
// diffLogic(inputJSONPath, outputJSONPath)



/**
 * ? Q. JSON 파일을 아래의 5,6번에 해당하는 로직 작성 후 JSON으로 저장
 * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
 * 
 * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
 * * 2. inputJSONdata, outputJSONdata의 value를 비교
 * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
 * * 4. difereences.json 파일에 필요한 상태값
 * * 5. 같은 단어가 무엇인지 저장
 * * 6. 다른 단어가 무엇인지 저장
 * * 7. 리턴을 통해 결과값을 전달
 */

