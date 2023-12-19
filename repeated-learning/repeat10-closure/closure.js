//? 해당 코드를 전역적으로 처리했을 때 단점은 무엇일까요?, 차근히 지역변수와 리턴 객체가 어떤 상호작용을 할 수 있는지 확인해보시기 바랍니다.
//* 캡슐화, 외부에서 접근하지 못하게하기 위해
//* 데이터 노출과 오염: 전역 변수로 설정하면 다른 부분에서 의도치 않게 이 변수에 접근하여 값을 변경할 수 있으며, 함수가 호출되지 않았을 때도 변수에 접근이 가능합니다. 이는 데이터의 노출과 오염을 일으킬 수 있습니다.

//* 상태 관리의 어려움: 여러 곳에서 전역 변수를 수정할 경우, 프로그램의 상태를 추적하고 디버깅하기가 어려워집니다.

//* 재사용 어려움: 지역 변수로 선언할 경우, 함수 내에서 독립적인 상태를 가지므로 함수를 여러 번 호출할 때 각각의 상태를 따로 유지할 수 있습니다. 전역 변수로 설정하면 한 함수의 호출이 다른 함수의 상태에 영향을 미칠 수 있습니다.
function Pokemon(name,type){
  let privateName = name;
  let privateType = type;

  return {
    getName: function(){
      return privateName
    },
    getType: function(){
      return privateType
    },
    setType: function(){
      privateType = newType;
    }
  }
}

const pikachu = Pokemon('피카츄','전기')
console.log(pikachu.getName()) // 피카츄
console.log(pikachu.getType()) // 전기
pikachu.setType('노말')
console.log(pikachu.getType()) // 노말