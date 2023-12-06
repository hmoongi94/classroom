interface Props{
  id?: string;
  style?: Partial<CSSStyleDeclaration>;
  [key:string]: any
}

class Component{
  private element: string
  private props: Props
  private children?:string[];

  constructor(element: string, props: Props, children?:string[]){
    this.element = element
    this.props = props
    this.children = children
  }

  private styleToString(style: Partial<CSSStyleDeclaration>):string{
    const entries = Object.entries(style)
    const objectValues = entries.map(([key,value])=> `${key}: ${value}`)
    return objectValues.join('')
  }

  private build():string{
    let tagParts = [`<${this.element}`]

    for(const [key,value] of Object.entries(this.props)){
      let attributeString = '';
      if(key==='style' && typeof value === 'object'){
        attributeString = `style="${this.styleToString(value)}"`
      } else{
        attributeString = `${key}="${value}"`
      }
      tagParts.push(attributeString)
    }

    tagParts.push('>')

    if(this.children){
      tagParts.push(...this.children)
    }

    tagParts.push(`</${this.element}>`);

    return tagParts.join('')
  }

  public static create(element:string, props:Props, children?:string[]):string{
    const component = new Component(element, props, children)
    return component.build()
  }
}

// 사용예시