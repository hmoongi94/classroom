import { styleObjectPutinTag } from "./esmodule.js"

// 매개변수1: tagName , 매개변수2: styleObject
const tagName = "li"
const styleObject = {
  "color":"red",
  "font-size":"16px",
  "background-color":"blue",
  "list-style":"none"
}

document.getElementById('root').appendChild(styleObjectPutinTag(tagName,styleObject))