export function load(){
  document.addEventListener('DOMContentLoaded',function(){

    function createElement(type,props,...children){
      return {type, props, children}
    }

    function component(stateData){
      const menuItems = [];
      for(let i=0; i<stateData.length; i++){
        const item = stateData[i]
        const menuItems = createElement('li',{},createElement('a',{href: item.hash}, item.text))
        menuItems.push(menuItems)
      }
    }





  })
}