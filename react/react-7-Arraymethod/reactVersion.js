import React from 'react';

const PokemonList = () => {
  const pokemon = ['피카츄', '라이츄', '파이리', '꼬부기'];

  const updatedPokemon = pokemon.map((pokemonName) => {
    if (pokemonName === '파이리') {
      return '버터풀';
    }
    return pokemonName;
  });

  const pokemonElements = updatedPokemon.map((pokemonName, index) => (
    <div key={index}>
      <p>{pokemonName}</p>
    </div>
  ));

  return <div>{pokemonElements}</div>;
};

export default PokemonList;

// const pokemon = ['피카츄', '라이츄', '파이리', '꼬부기'];
// const updatedPokemon = pokemon.map((pokemonName) => {
//   return pokemonName
// })

// console.log(updatedPokemon)