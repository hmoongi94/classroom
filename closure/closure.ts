// interface 문법은 데이터타입을 정하는 협업의 역할을 합니다.
interface MemberData{
  id:string;
  password:string;
  address:string;
  cart:string[];
}

// 클로저를 사용하는 함수
/**
 * 멤버 데이터에 접근하는 함수를 반환하는 클로저를 생성합니다.
 * @param id - 멤버의 아이디입니다.
 * @param password - 멤버의 비밀번호입니다.
 * @param address - 멤버의 주소입니다.
 * @param cart - 멤버의 쇼핑 카트입니다.
 * @returns 멤버 데이터를 반환하는 함수 입니다.
 */

function memberDataWithClosure(id:string, password:string, address:string, cart:string[]):()=> MemberData{
  return function(){
    return {id, password, address, cart}
  }
}

