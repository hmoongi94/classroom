const signUpAsset = require("./signUpAssetModule.js")

const jsonData = signUpAsset

jsonData.username = input[0].value
jsonData.password1 = input[1].value
jsonData.password2 = input[2].value
jsonData.email = input[3].value

console.log(jsonData)
module.exports = jsonData