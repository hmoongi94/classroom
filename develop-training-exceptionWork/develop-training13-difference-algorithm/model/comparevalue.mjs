import fs from "fs"
import path from "path"

const testObject = {
  key1: "첫 번째 키에대한 value",
  key2: "두 번째 키에대한 value",
  key3: "세 번째 키에 대한 value"
}

function ObjectCompareValue(object){

  for(const key in object){
    const value = object[key]
    console.log(value)
  }

}

ObjectCompareValue(testObject)