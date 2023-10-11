const pokemonOne = {
  name: "피카츄",
  pokemonOne: function(){
    console.log(this)
    console.log(this.name)
  }
}

pokemonOne.pokemonOne()

/**
 * pokemonOne이라는 객체 리터럴에는 두개의 프로퍼티(property)가 존재한다.
 * name이라는 key와 pokemonOne이라는 함수가 존재한다.
 * 함수는 객체의 키의 위치에 있으므로, 메서드라고 부른다.
 * 메서드 pokemonOne()은 콘솔에 기록을 내는 간단한 기능을 한다.
 * 콘솔의 매개변수로 this.name을 넘겨주었다.
 * 여기서의 this는 객체 리터럴의 식별자인 객체 pokemonOne이다.
 * 그러므로 아래의 메서드 호출은 정상적으로 '피카츄'가 출력된다.
 */