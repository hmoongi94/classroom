export function load(){
  document.addEventListener("DOMContentLoaded",function(){
    
    let stateData = {
      text: ""
    }

    const inputField = document.getElementById('text-input')
    const displayText = document.getElementById('display-text')

    // 입력필드에 입력할 때마다 데이터 객체 업데이트 및 표시 영역 업데이트
    inputField.addEventListener("input",function(event){
      // input 이벤트 때문에 입력이 일어나는 것에서 이벤트가 계속 발생한다.
      // DOM API의 event object에 대해 복습할 것
      stateData.text = event.target.value;
      updateDisplay();
    })

    function updateDisplay(){
      displayText.textContent = stateData.text
    }

    //초기 표시 영역 업데이트
    updateDisplay();
  })
}