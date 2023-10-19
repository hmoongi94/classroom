const signUpAsset = {
  username:"",
  password1:"",
  password2:"",
  email:"",
  inputBoxColor:"#D9D9D9",
  textColor: "#B6B6B6",
  pointColor:"#FF6666"
}

input = document.getElementsByTagName('input')


input[4].addEventListener("click",function(){
  signUpAsset.username = input[0].value
  signUpAsset.password1 = input[1].value
  signUpAsset.password2 = input[2].value
  signUpAsset.email = input[3].value
  
  console.dir(input)
  console.log(signUpAsset)
})

module.exports = signUpAsset