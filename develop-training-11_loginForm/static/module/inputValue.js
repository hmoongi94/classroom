const signUpAsset = require("./signUpAssetModule.js")

const jsonData = signUpAsset
const input = document.getElementsByTagName("input")

const {id, password1, password2, email} = jsonData
jsonData.id = input[0].value
jsonData.password1 = input[1].value
jsonData.password2 = input[2].value
jsonData.email = input[3].value

module.exports = jsonData