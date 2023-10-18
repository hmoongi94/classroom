const _pokemon = {
  pokemonname: "피카츄",
  type: "전기",
  level: 42,
  skills: ["10만볼트", "전광석화", "아이언테일", "볼트태클"]
};

const {pokemonname, type} = _pokemon;

//그동안 겍체 접근방식을 채택해서 작성했던 방식으로,
// javascript 뿐만 아니라, 다른 언어에서도 많이 사용하는 방식
console.log(_pokemon.pokemonname)
console.log(_pokemon.type)