// 객체 배열 예시
//* 객체 타입을 정의할 때 :object가 아닌 interface문법을 통해 그 객체의 속성?까지 정해줌
/**
 * interface 문법을 통해 '어떤 객체'의 속성(property)과 타입(type)을 정의할 수 있습니다.
 * User라는 인터페이스를 따르는 객체는 id와 name 속성을 가져야 하고, id는 number타입, name은 string타입이어야만 하게끔
 * 타입 안정성(tpye safety)을 보장합니다.
 */
interface User {
  id: number;
  name: string;
}

/**
 * users라는 배열은 인터페이스(특정 형식)인 User를 따르는 객체만을 원소로 가질 수 있게끔 제한됩니다.
 * 실제적인 코드로서는 위 interface만 확인하면 어떤 객체든 무슨 내용이 어떤 구조로 되어있는지 추론 할 수 있게됩니다.
 */
const users: User[] = [
  { id: 1, name: "홍문기" },
  { id: 2, name: "홍현기" },
];

/**
 * @param obj User 객체
 * @returns Object를 JSON 문자열로 변환한 후
 */
function jsonConvertObject(obj: User): User {
  return JSON.parse(JSON.stringify(obj));
}

//* 얕은 복사
/**
 * 얕은 복사의 개념은 배열의 원소가 객체일 경우, 원소의 객체를 복사하지 않고 참조만 복사하는 것을 의미합니다.
 * 아래의 전개 연산자(spread operator)를 통해 객체를 복사하고 있지만, 객체의 속성이 객체일 경우, 참조만 복사하게 됩니다.
 */
const shallowCopiedUsers: User[] = users.map((user) => {
  return user;
});

//* 깊은 복사
/**
 * JSON으로 저장한 후, 다시 불러오는 방식을 통해 깊은 복사를 구현할 수 있습니다.
 * users 배열과 deepCopiedUsers 배열은 서로 완전히 다른 객체를 참조하고 있습니다.
 */
const deepCopiedUsers: User[] = users.map((user) => jsonConvertObject(user));

//복사된 배열에서 객체 수정
shallowCopiedUsers[0].name = "홍문기 미남"; //얕은 복사는 원본 배열도 수정됨.
deepCopiedUsers[1].name = "홍현기 미남";

//결과 출력
console.groupCollapsed("객체 배열 예시");
  console.log("원본배열:", users); //원본 배열
  console.log("얕은복사 배열:", shallowCopiedUsers); //얕은복사 배열
  console.log("깊은복사 배열:", deepCopiedUsers); //깊은복사 배열
console.groupEnd();
