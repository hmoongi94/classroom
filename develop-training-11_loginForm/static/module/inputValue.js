const signUpAsset = require("./signUpAssetModule.js")

const jsonData = signUpAsset

jsonData.id = input[0].value
jsonData.password1 = input[1].value
jsonData.password2 = input[2].value
jsonData.email = input[3].value

module.exports = jsonData