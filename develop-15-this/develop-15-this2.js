const pokemonTwo = {
  name: "라이츄",
  pokemonTwo: () => {
    console.log(this)
    console.log(this.name)
  }
}

console.log(global)

/**
 * 비교 예제 pokemonOne 객체의 메서드와 비교점이 존재한다.
 * 바로 메서드 pokemonTwo 함수 선언 방식이 화살표 함수 방식이라는 점이다.
 * 화살표 함수는 this를 바인딩(묶어내지)하지 않는다.
 * 따라서 pokemonOne() 메서드와 다르게 pokemonTwo()함수의 this는 전역 객체를 가리킨다.
 * 바인딩 한다는 단어가 매우 낯설은데, 이것을 'this 키워드가 가리키는 것'을 판단하는 과정으로, 여기서의 this는 객체 리터럴 pokemonTwo의 상위 영역인 전역 객체를 가리킨다. 
 * Node.js의 최상위 전역객체는 global 객체이고, browser의 최상위 전역객체는 windwo객체이다. 
 * 따라서 pokemonTwo() 함수의 this는 global 객체를 가리킨다.
 * 가리키는 영역이 다르기 떄문에 필요에 따라 this를 사용하는 방식이 달라진다.
 * 아래의 메서드 호출은 global 전역 객체에 name이라는 키가 없으므로 undefined가 출력된다.
 */

pokemonTwo.pokemonTwo()