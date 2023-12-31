export function load(){
  document.addEventListener("DOMContentLoaded", function () {

    /**
     * 마치 곳간에 물건을 보관하는 것처럼
     * 데이터를 관리할 객체를 만들어서
     * 데이터를 관리한다.
     * 이러한 개념을 state라고 한다.
     * 아래의 stateData 객체 선언을 브라우저가 읽는 순간 메모리 어딘가에 존재하는 주소를 할당받는다.
     */

    let stateData = {
      basicTitle: "기본 제목",
      newTitle: "새로운 제목"
    }

    // initialize
    // 간단한 문서 식별
    const h1 = document.getElementById("title")
    const button = document.getElementById("update-button")

    /**
     * @param {HTMLElement} domElement
     * return {void}
     * void는 return 없음을 의미한다.
     * updateUI 함수는 domElement라는 매개변수를 받는다.
     * 예제에서 말하는 매개변수는 h1을 의미한다.
     */

    function updateUI(domElement) {
      // 선택된 domElement의 textContent를 stateData.basicTitle로 변경한다.
      domElement.textContent = stateData.basicTitle
    }

    //데이터를 변경하는 함수
    function updateTitle(setNewTitle) {
      // stateData.basicTitle에 매개변수 setNewTitle을 할당한다.
      stateData.basicTitle = setNewTitle;
      // updateUI 함수를 호출한다. updateTitle함수는 updateUI 함수를 호출하는 것까지 책임진다.
      updateUI(h1)
      // updateUI는 textContent를 변경하는 함수이다.
    }

    //최초한번(최초 접속 혹은 GET요청)을 위해 한번은 실행시킨다.
    updateUI(h1);
    button.addEventListener("click", function () {
      //button을 클릭하면 stateData에 마련된 함수가 '연결되어' 동작하여 결국에는
      //h1 데이터는 새로운 값으로 전환된다.
      updateTitle(stateData.newTitle)
    })


  })
}