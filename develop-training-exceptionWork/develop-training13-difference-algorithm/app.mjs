// built-in modules
// import fs from "fs"
// import path from "path"

// custom modules
import {diffLogic} from './model/diff-logic.mjs'

// json files path
const inputJSONPath = './data/fromDB-data.json'
const outputJSONPath = './data/differences.json'

// controller

// *먼저 json파일을 읽고 객체로 파싱한 후에 객체를 가져온다.
// *지금 데이터파일의 객체는 단조롭게 2개의 key값으로만 구성되어있어서 하나의 함수로 처리할 수 있었지만,
// *객체가 복잡한 경우에는 객체를 분류해주는 단계가 필요할 것같다.
diffLogic(inputJSONPath, outputJSONPath)
