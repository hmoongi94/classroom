// custom modules
import diffLogic from './model/diff-logic.js'
diffLogic()

// built-in modules
import fs from "fs"

// json files path
const inputJSONPath = "./data/fromDB-data.json"
const outputJSONPath = "./data/differences.json"

// controller
const resultObject = diffLogic(inputJSONPath, outputJSONPath)
console.log(resultObject)