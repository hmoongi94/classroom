export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    function createElement(type, props, ...children) {
      // createElement함수는 react에서 ui를 만들기 위한 핵심 함수 중 하나로, 가상 DOM에 삽입되는 React 엘리먼트를 반환한다.
      // createElement(type,[props],[...children])
      // type: 엘리먼트의 타입을 나타내는 문자열 또는 React 컴포넌트입니다.
      // props: 엘리먼트의 속성을 나타내는 객체로, 생략 가능합니다.
      // children: 엘리먼트의 자식 요소를 나타내는 인자로, 생략 가능하며 여러 개의 인자를 받을 수 있습니다.
      // ...은 나머지 매개변수로서 해당함수에 전달된 모든 나머지 인자들을 배열로 수집합니다.
      return { type, props, children }
    }

    //* React에서의 createElement는 React 요소를 생성하는 데 사용되며, 가상 DOM(Virtual DOM)을 통해 더 효율적으로 UI를 업데이트할 수 있게 합니다.
    //* React의 createElement 함수는 JSX(JavaScript XML) 문법에서 사용됩니다. JSX는 JavaScript의 확장 문법으로, XML과 유사한 문법을 사용하여 React 요소를 작성할 수 있게 해줍니다. JSX 코드는 Babel과 같은 트랜스파일러를 통해 일반 JavaScript 코드로 변환되어 실행됩니다.
    

    function component(stateData) {
      const menuItems = [];
      for (let i = 0; i < stateData.length; i++) {
        const item = stateData[i]
        const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.text))
        menuItems.push(menuItem)
        // menuItems라는 배열에 sateData의 데이터값을 사용해 {type:'li', property:{}, children:{type:'a', property:{href:#data}, children: [data] }} 값인 
      }
      // console.log(menuItems)
      // console.log(...menuItems)
      const menu = createElement('ul', {}, ...menuItems)
      const content = createElement('div', {}, 'Hello React')
      // console.log(createElement('div', {}, menu, content))
      // children: [{...},{...}]
      return createElement('div', {}, menu, content)
    }

    function render(virtualDom) {
      if (typeof virtualDom === 'string') {
        console.log(document.createTextNode(virtualDom))
        return document.createTextNode(virtualDom)
      }
      const element = document.createElement(virtualDom.type)
      //*여기서 createElement는 dom의 함수이므로 virtualDom.type에 들어있는 데이터로 태그를 만듬.
      if (virtualDom.props) {
        for (const [key, value] of Object.entries(virtualDom.props)) {
        //* Object.entries() 메소드를 사용해 virtualDom.props의 객체를 [key,value]쌍의 배열로 반환하고 그 배열들의 각 쌍을 for..of루프를 사용하여 처리한다.
          element.setAttribute(key, value)
          //* element: DOM 요소에 속성으로 설정함
        }
      }
      for (let i = 0; i < virtualDom.children.length; i++) {
        const child = virtualDom.children[i]
        element.appendChild(render(child))
      }
      return element
    }

    const stateData = [
      { hash: '#home', text: 'Home' },
      { hash: '#about', text: 'About' },
      { hash: '#services', text: 'Services' },
      { hash: '#portfolio', text: 'portfolio' },
      { hash: '#contact', text: 'Contact' }
    ]

    const virtualDom = component(stateData)
    const container = document.getElementById('root')
    container.appendChild(render(virtualDom))
    // console.dir(virtualDom)
    // console.dir(render(virtualDom))

    // console.dir(container)
    // console.dir(virtualDom)

  })
}