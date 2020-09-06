import React, { useState, useEffect } from "react";

/**
 * @param {string} url - Polaroid image url
 * @param {string} text - Polaroid legend and alt text.
 * @param {function} shakeIt - Polaroid event.
 */
function PokemonSearch() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json()) // Transforma o retorno json em dados
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []); // o [] garante que somente será executado uma única vez.

  return (
    <> 
      {pokemonList.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <a href={item.url} target="_blank">
            Mais Informações
          </a>
        </div>
      ))}
    </>
  );
}

export default PokemonSearch;
