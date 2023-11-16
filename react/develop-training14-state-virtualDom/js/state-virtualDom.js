export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    function createElement(type, props, ...children) {
      // createElement함수는 react에서 ui를 만들기 위한 핵심 함수 중 하나로, 가상 DOM에 삽입되는 React 엘리먼트를 반환한다.
      // createElement(type,[props],[...children])
      // type: 엘리먼트의 타입을 나타내는 문자열 또는 React 컴포넌트입니다.
      // props: 엘리먼트의 속성을 나타내는 객체로, 생략 가능합니다.
      // children: 엘리먼트의 자식 요소를 나타내는 인자로, 생략 가능하며 여러 개의 인자를 받을 수 있습니다.
      return { type, props, children }
    }

    //*  React에서의 createElement는 React 요소를 생성하는 데 사용되며, 가상 DOM(Virtual DOM)을 통해 더 효율적으로 UI를 업데이트할 수 있게 합니다.
    //* React의 createElement 함수는 JSX(JavaScript XML) 문법에서 사용됩니다. JSX는 JavaScript의 확장 문법으로, XML과 유사한 문법을 사용하여 React 요소를 작성할 수 있게 해줍니다. JSX 코드는 Babel과 같은 트랜스파일러를 통해 일반 JavaScript 코드로 변환되어 실행됩니다.
    

    function component(stateData) {
      const menuItems = [];
      for (let i = 0; i < stateData.length; i++) {
        const item = stateData[i]
        const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.text))
        menuItems.push(menuItem)
        console.log(menuItem)
      }
      console.log(menuItems)
      const menu = createElement('ul', {}, ...menuItems)
      const content = createElement('div', {}, 'Hello React')
      return createElement('div', {}, menu, content)
    }

    function render(virtualDom) {
      if (typeof virtualDom === 'string') {
        return document.createTextNode(virtualDom)
      }
      const element = document.createElement(virtualDom.type)
      if (virtualDom.props) {
        for (const [key, value] of Object.entries(virtualDom.props)) {
          element.setAttribute(key, value)
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

    // console.dir(container)
    // console.dir(virtualDom)

  })
}