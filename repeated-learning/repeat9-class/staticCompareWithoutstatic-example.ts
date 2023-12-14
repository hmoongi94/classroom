class Minam{
  static sayHello():string{
    return "hello hongmoongi"
  }
}

class Chunam{
  sayHello():string{
    return "bye Hongmoongi"
  }
}

// Minam 클래스의 static 메서드 사용 예시
console.log(Minam.sayHello()) // hello hongmoongi

// Chunam 클래스의 인스턴스 생성 및 메서드 사용 예시
const chunamInstance2 = new Chunam();
console.log(chunamInstance.sayHello()) // bye hongmoongi