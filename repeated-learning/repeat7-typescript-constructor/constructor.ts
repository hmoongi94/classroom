class Calculator {
  private _a: number;
  private _b: number;

  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  //getter와 setter
  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get b(): number {
    return this._b;
  }

  set b(value: number) {
    this._b = value;
  }

  // 사칙연산 메서드
  public add(): number {
    return this._a + this._b;
  }

  public subtract(): number {
    return this._b - this._b;
  }

  public multiply(): number {
    return this._b * this._b;
  }

  public divide(): number {
    if (this._b === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return this._b / this._b;
  }

  // static 메서드
  static addStatic(a: number, b: number): number {
    return a + b;
  }

  static subtractStatic(a: number, b: number): number {
    return a - b;
  }

  static multiplyStatic(a: number, b: number): number {
    return a * b;
  }

  static divideStatic(a: number, b: number): number {
    if (b === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return a / b;
  }
}

//사용 예
const calc = new Calculator(10,5)
// console.dir(Calculator)

//* 정적메서드로 새로운 매개변수를 받아서 사칙연산을 할 수 있고,
//* 안에 public메서드는 클래스의 인스턴스를 생성할 때 받는 매개변수를 어떻게 할지 정한다?
console.log(Calculator.addStatic(20,5))
console.log(calc)
console.log(calc.add())

/**
 * 생성자 함수의 구조를 위의 console.dir()로 확인하면 아래의 '구조'를 확인할 수 있습니다.
 * static, 즉 정적 메서드는 생성자 함수의 프로퍼티로 붙어있는 것이 아니라, 생성자 함수 자체의 프로퍼티로 붙어있는 것을 확인할 수 있습니다.
 * static(정적이다)라는 해당 표현의 의미와 public 키워드의 차이는
 *? 정적 메서드는 생성자 함수의 인스턴스를 생성하지 않고도 사용할 수 있지만, public메서드는 인스턴스를 생성해야만 사용할 수 있다는 것입니다.
 *? 인스턴스를 생성하지 않으면 static메서드가 사용이 안되는거 같은데
 * 우리가 흔히 사용하고 봐왔던 메서드는 public 메서드입니다.
 *? static메서드와 매우 혼동되는 부분이므로 마지막 Calcultator.addStatic()메서드는 new키워드를 사용하지 않고서도 사용할 수 있습니다. ->이 부분 해봤는데 안됐었음
 */