//? 해당 코드를 전역적으로 처리했을 때 단점은 무엇일까요?, 차근히 지역변수와 리턴 객체가 어떤 상호작용을 할 수 있는지 확인해보시기 바랍니다.
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