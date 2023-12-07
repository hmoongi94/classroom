var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Calculator.prototype, "a", {
        //getter와 setter
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    // 사칙연산 메서드
    Calculator.prototype.add = function () {
        return this._a + this._b;
    };
    Calculator.prototype.subtract = function () {
        return this._b - this._b;
    };
    Calculator.prototype.multiply = function () {
        return this._b * this._b;
    };
    Calculator.prototype.divide = function () {
        if (this._b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return this._b / this._b;
    };
    // static 메서드
    Calculator.addStatic = function (a, b) {
        return a + b;
    };
    Calculator.subtractStatic = function (a, b) {
        return a - b;
    };
    Calculator.multiplyStatic = function (a, b) {
        return a * b;
    };
    Calculator.divideStatic = function (a, b) {
        if (b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return a / b;
    };
    return Calculator;
}());
//사용 예
var calc = new Calculator(10, 5);
// console.dir(Calculator)
console.log(Calculator.addStatic(20, 5));
console.log(calc);
console.log(calc.add());
