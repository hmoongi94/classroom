const jsonData = require("./signUpAssetModule.js")
const input = document.getElementsByTagName("input")
console.log(jsonData)

const {username, password1, password2, email} = jsonData

username = input[0].value
password1 = input[1].value
password2 = input[2].value
email = input[3].value

console.log(jsonData)