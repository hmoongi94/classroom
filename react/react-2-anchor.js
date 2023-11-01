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
  // component함수를 부모태그안에 또 써서 자식태그를 부모태그와 같은 방법으로 만들어준다.

  elementStr += `<${elementNode}>`
  return elementStr;
}