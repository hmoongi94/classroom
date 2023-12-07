// 객체 배열 예시
/**
 * interface 문법을 통해 '어떤 객체'의 속성(property)과 타입(type)을 정의할 수 있습니다.
 * User라는 인터페이스를 따르는 객체는 id와 name 속성을 가져야 하고, id는 number타입, name은 string타입이어야만 하게끔
 * 타입 안정성(tpye safety)을 보장합니다.
 */

interface User{
  id: number;
  name: string;
}
/** 
 * users라는 배열은 인터페이스(특정 형식)인 User를 따르는 객체만을 원소로 가질 수 있게끔 제한됩니다.
 * 실제적인 코드로서는 위 interface만 확인하면 어떤 객체든 무슨 내용이 어떤 구조로 되어있는지 추론 할 수 있게됩니다.
 */

const users: User[] =[ 
  {id:1, name: "홍문기"},
  {id:2, name: "홍현기"}
]
