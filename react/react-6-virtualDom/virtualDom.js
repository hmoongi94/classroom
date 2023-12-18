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
    function createElementExample(type, properties, children) {
      // 자식 요소들을 가상 Dom 요소로 반환
      const props = {
        children: children.map(child => {
          // children 요소가 객체일때는 리턴하고, 아니면 다시 본 함수 호출(재귀함수)
          // 객체가 아닌경우 텍스트를 가진 가상 DOM 요소를 생성
          // 어려운 코드 테크닉이므로, 태그가 아닌 기본 형태를 가지고 연습하시기 바랍니다.
          if (typeof child === 'object') {
            return child;
          } else {
            return createTextElementExample(child)
          }
        })
      }

      // 속성을 복사
      if (properties) {
        for (const key in properties) { //객체의 반복문 for-in
          if (properties.hasOwnProperty(key)) {
            // 프로퍼티를 가지고있는지 검사하는 매우 편리한 메서드
            props[key] = properties[key]
          }
        }
      }

      return {
        type: type,
        props: props,
      }
    }

    /**
     * createTextElementExample 함수는 텍스트를 가진 가상 DOM 요소를 생성합니다.
     * 
     * @param {string} text - 텍스트 내용.
     * @returns {Object} 텍스트를 가진 가상 DOM 요소.
     */
    function createTextElementExample(text){
      return{
        type: "TEXT_ELEMENT",//DOM API의 코어, 인터페이스인 Node(요소마디)의 타입
        props:{
          nodeValue: text,
          children:[],
        }
      }
    }

    /**
     * render 함수는 가상 DOM을 실제 DOM으로 렌더링합니다.
     * 
     * @param {Object} virtualDOM - 렌더링할 가상 DOM.
     * @param {HTMLElement} container - 렌더링될 DOM 요소의 컨테이너
     */
    function render(virtualDOM,container){
      let domElement
      if(virtualDOM.type==="TEXT_ELEMENT"){
        domElement = document.createTextNode('')
      } else{
        domElement = document.createElement(virtualDOM.type)
      }

      // 속성 설정
      for(const key in virtualDOM.props){
        if(key !== 'children'){
          domElement[key]= virtualDOM.props[key]
        }
      }

      // 자식 요소들을 재귀적으로 렌더링
      // 자식 요소가 텍스트인 경우는 렌더링하지 않고, 텍스트 노드를 생성
      virtualDOM.props.children.forEach(child=> render(child, domElement))
      container.appendChild(domElement)
    }

    // 애플리케이션의 루트 요소 생성


  })
}