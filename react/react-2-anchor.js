function component(elementNode, attributes, children){
  let elementStr = `<${elementNode}`;
  for(let key in attributes){
    elementStr += `${key}="${attributes[key]}"`;
    //attributes[key] -> key에 대한 value(값)을 가져옴
  }
  elementStr +='>';
  if(children){
    children.forEach((child)=>{
      if(typeof child === 'string'){
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children)
      }
    })
  }
  elementStr += `<${elementNode}>`
  return elementStr;
}