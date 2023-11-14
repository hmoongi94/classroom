export function load(){

let stateData = {
  isActive: false
}

const button = document.getElementById("toggle-button")
const displayText = document.getElementById("display-text")

button.addEventListener("click",function(){
  if(stateData.isActive){
    stateData.isActive = false
  } else{
    stateData.isActive = true
  }
  updateUI();
})

function updateUI(){
  if(stateData.isActive){
    displayText.textContent = "상태가 활성화되어 있습니다."
    displayText.style.color = "green"
  } else{
    displayText.textContent = "상태가 비활성화되어 있습니다."
    displayText.style.color = "red"
  }
}
updateUI(); //초기 UI설정


}