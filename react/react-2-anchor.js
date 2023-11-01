function component(elementNode, attributes, children){
  let elementStr = `<${elementNode}`;
  for(let key in attributes){
    elementStr += `${key}="${attributes[key]}"`;
    //attributes[key] -> key에 대한 value(값)을 가져옴
  }
  elementStr +='>';
  // id, class값 같은 속성을 넣어주는 부모태그 만듬
  
  if(children){
    children.forEach((child)=>{
      if(typeof child === 'string'){
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children)
      }
    })
  }
  // 문자열인 경우에는 elementNode 태그의 innerHtml에 들어갈 문자가 들어감.
  // component함수를 부모태그안에 또 써서 자식태그를 부모태그와 같은 방법으로 만들어준다.

  elementStr += `<${elementNode}>`
  return elementStr;
}

window.addEventListener('hashchange',()=>{
  // haschchange 이벤트는 웹브라우저의 url 해시부분이 변경될 때 발생하는 이벤트이다.
  const contentDiv = document.getElementById('root');
  // window.location 객체는 현재 URL에 대한 정보를 제공한다.
  // hash 속성은 URL의 해시 부분을 반환한다.
  // 예를 들어, http://example.com#page1 이라는 url이 있다면, hash 속성은 #page1을 반환한다.
  // substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환한다.
  // #을 제외한 문자열을 반환하기 위해 substr(1)을 사용한다.
  // <a>태그의 href 속성에는 #page1, #page2, #page3, #page4가 있다.
  const hash = window.location.hash.substr(1);

  // if(hash === 'page1') {}
  // else if(hash === 'page2'){}
  // if() 조건문의 패턴을 뒤로하고, switch문을 사용했다.
  // switch()문자체가 '일관된 조건식'을 뉘앙스로 설명하기 때문에
  // '모두 읽지 않아도' 어떤 작용을 해낸다는 것을 알게된다.

  switch(hash){
    case 'page1':
      contentDiv.innerHTML = component('h1', {style:'color:blue'}, ["This is page 1"])
      break;
    case 'page2':
      contentDiv.innerHTML = component('div', {style: 'background-color: cadetblue;'}, [component('h1',{},['This is Page2'])]);
      break;
    case 'page3':
      contentDiv.innerHTML = component('div', {style: 'display:flex; justify-content-center; color:#ff2222;'},[component('h1',{},['This is Page3'])]);
      break;
    case 'page4':
      contentDiv.innerHTML = component('div',{style:'display:flex; justify-content:center; color:#333;'}, [component('h1',{},['This is Page4'])])
      break;
    
  }
})