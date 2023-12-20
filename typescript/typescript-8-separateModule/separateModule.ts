// 어디를 분류해야 적절하게 요점을 짚을 수 있을까요?
type Props={
  [key: string]: string
}

function createElement(tagName: string, props: Props, ...children: string[]):string{
  const propEntries = Object.entries(props)
  let propString = ''

  for(let [key,value] of propEntries){
    propString += `${key}="${value}"`
  }
}


