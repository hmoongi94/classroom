const signUpAsset = require("./signUpAssetModule.js")

const jsonData = signUpAsset
const input = document.getElementsByTagName("input")
const h1 = document.getElementsByTagName("h1")

jsonData.id = input[0].value
jsonData.password1 = input[1].value
jsonData.password2 = input[2].value
jsonData.email = input[3].value

h1.textContent = `${input[0].value}님! 반갑습니다. 저에게 편지를 보내주세요.`