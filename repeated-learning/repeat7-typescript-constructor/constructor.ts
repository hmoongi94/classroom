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