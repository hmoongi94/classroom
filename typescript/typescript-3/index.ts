interface Props {
  id?: string;
  style?: Partial<CSSStyleDeclaration>;
  [key: string]: any;
}

class Component {
  //* 생성자 함수를 정의하기 전에 멤버변수를 선언한다. private,public, protected,,: 상태개념으로 현재 이해함.
  //? 상태를 정해주면서 이미 element, props, children을 썼는데 데이터타입을 왜 정해줘야하는지 이해가 안간다. 이 안에 들어갈 내용들은 생성자 함수 매개변수에서 데이터타입을 정해주는데?
  private element: string;
  private props: Props;
  private children?: string[];

  constructor(element: string, props: Props, children?: string[]) {
    this.element = element;
    this.props = props;
    this.children = children;
  }

  private styleToString(style: Partial<CSSStyleDeclaration>): string { //? Partial<CSSStyleDeclaration>은 string이라서 따로 string을 지정할 필요가 없지않나?
    const entries = Object.entries(style);
    const objectValues = entries.map(([key, value]) => `${key}: ${value}`);
    return objectValues.join("");
  }

  private build(): string {
    let tagParts = [`<${this.element}`];

    for (const [key, value] of Object.entries(this.props)) {
      let attributeString = "";
      if (key === "style" && typeof value === "object") {
        attributeString = `style="${this.styleToString(value)}"`;
      } else {
        attributeString = `${key}="${value}"`;
      }
      tagParts.push(attributeString);
    }

    tagParts.push(">");

    if (this.children) {
      tagParts.push(...this.children);
    }

    tagParts.push(`</${this.element}>`);

    return tagParts.join("");
  }

  public static create(
    //? public static 같이 사용???
    element: string,
    props: Props,
    children?: string[]
  ): string {
    const component = new Component(element, props, children);
    //* class component를 정의하는 스코프 안에서 component를 불러서 쓸 수 있다? -> 정적 메서드(static)은 인스턴스(new) 없이 사용할 수 있다.
    //* 이렇게하면 클래스의 사용자는 `component.create`를 통해 인스턴스를 직접 생성하는 것이 아니라, 클래스에 대한 동작을 수행하게 된다. 
    //? 클래스 내부에서 new Component를 사용하여 인스턴스를 생성하는 것은 클래스 내부의 일반 메서드 또는 생성자에서만 가능하며, 외부에서는 생성된 인스턴스를 사용해야 합니다.
    return component.build();
  }
}

// 사용예시

const myComponent = Component.create('div',{id:'example',style:{color: 'red'}}, ['이것은 자바인가 타스인가'])
const root = document.getElementById('root')
root.innerHTML = myComponent