interface Props {
  id?: string;
  style?: Partial<CSSStyleDeclaration>;
  [key: string]: any;
}

class Component {
  //* 생성자 함수를 정의하기 전에 멤버변수를 선언한다. private,public, protected,,: 상태개념으로 현재 이해함.
  //* 상태를 정해주면서 이미 element, props, children을 썼는데 데이터타입을 왜 정해줘야하는지 이해가 안간다. 이 안에 들어갈 내용들은 생성자 함수 매개변수에서 데이터타입을 정해주는데?
  private element: string;
  private props: Props;
  private children?: string[];

  constructor(element: string, props: Props, children?: string[]) {
    this.element = element;
    this.props = props;
    this.children = children;
  }

  private styleToString(style: Partial<CSSStyleDeclaration>): string { //* Partial<CSSStyleDeclaration>은 string이라서 따로 string을 지정할 필요가 없지않나?
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
    element: string,
    props: Props,
    children?: string[]
  ): string {
    const component = new Component(element, props, children);
    return component.build();
  }
}

// 사용예시
