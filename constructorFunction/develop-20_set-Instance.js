class MakeInstance{
  // 객체를 생성하는 '공장'에 해당하는 생성자 함수
  constructor(idValue, passwordValue, emailValue){
    this.id = idValue;
    this.password = passwordValue;
    this.email = emailValue;
  }

  /**
   * 관용적으로 사용하는 '셋팅'한다는 말과 매우 닮은
   * 생성자 함수의 특별한 특별한 기능 set키워드, setter
   * 아래의 코드는 특정기능을 따로 하기 위함이 아닌,
   * 객체를 만들 때 필요한 데이터타입과 같은 '셋팅'을 도와주는 함수로
   * 객체지향언어에서 매우 중요한 개념 중 하나이다.
   * 조금 더 객체지향언어 유저들의 용어로 '은닉화(private)'라고 부른다.
   */

  set id(value){
    if(typeof(value)==="string"){
      this._id = value + "님";
    } else{
      console.log("id는 문자열이어야 합니다.")
    }
  }
}

const instance = new MakeInstance('id','password','email');
/**
 * 매개변수 0번째인 idValue자리에 "test"라는 문자열을 담았다.
 * setter에 의해 문자열이 아닌 경우, console.log()가 실행되고,
 * 문자열인 경우 this._id에 value값이 할당된다.
 * _(언더스코어)는 관용적으로 '은닉화'된 변수를 의미한다.
 * 매개변수를 통해 값을 '아무것이나' 넣지 못하는 효과
 * setter의 내부객체 key인 _언더바 형태로 만들어진 key는
 * 정해진 조건에서만 '대입'이 가능하다.
 */
console.table(instance)