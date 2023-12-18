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
     * @param {Object} properties - 요소의 속성 (예: { id: 'app'})
     * @param {Array} children - 자식 요소들(문자열 또는 객체)
     * @returns {Object} 생성된 가상 DOM 요소
     */
    function createElementExample(type, properties, children){
      // 자식 요소들을 가상 Dom 요소로 반환
      const props = {
        children: children.map(child=>{
          // children 요소가 객체일때는 리턴하고, 아니면 다시 본 함수 호출(재귀함수)
          // 객체가 아닌경우 텍스트를 가진 가상 DOM 요소를 생성
          // 어려운 코드 테크닉이므로, 태그가 아닌 기본 형태를 가지고 연습하시기 바랍니다.
          if(typeof child==='object'){
            return child;
          } else{
            return createTextElementExample(child)
          }
        })
      }

      // 속성을 복사
      if(properties){
        for(const key in properties){ //객체의 반복문 for-in
          if(properties.hasOwnProperty(key)){
            // 프로퍼티를 가지고있는지 검사하는 매우 편리한 메서드
            props[key] = properties[key]
          }
        }
      }

      return{
        type: type,
        props: props,
      }
    }

    /**
     * 
     */
  })
}