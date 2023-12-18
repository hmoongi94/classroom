export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {

    /**
     * createElementExample 함수는 가상 DOM 요소를 생성합니다.
     * 
     * 아래와 같은 타입명시 주석 방식인 JSDoc은 에디터의 도움을 받는 것이므로
     * 최종적으로 옳지 못한 방식입니다.
     * 추후 Typescript로 말끔히 해결할 수 있습니다.
     * 
     * @param {string} type - 생성할 요소의 타입 (예: 'div', 'h1')
     */
    function createElementExample(type, properties, children){
      const props = {
        children: children.map(child=>{

        })
      }
    }
  })
}