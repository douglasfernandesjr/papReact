import React, { useState, useEffect } from "react";
import PokemonSearchContext from "./PokemonSearchContext";
import PokemonBadge from "./PokemonBadge";
import "./PokemonSearch.css";
import PokemonList from "../PokemonList";

function mountApiUrl(selectedGen) {
  let limit = 151;
  let offset = 0;

  switch (selectedGen) {
    case "gen2":
      limit = 100;
      offset = 151;
      break;
    case "gen3":
      limit = 135;
      offset = 251;
      break;
    case "gen4":
      limit = 107;
      offset = 386;
      break;
    case "gen5":
      limit = 156;
      offset = 493;
      break;
    case "gen6":
      limit = 72;
      offset = 649;
      break;
    case "gen7":
      limit = 88;
      offset = 721;
      break;
    case "gen8":
      limit = 81;
      offset = 809;
      break;
    case "gen1":
    default:
      break;
  }

  return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
}

/**
 * @param {string} url - Polaroid image url
 * @param {string} text - Polaroid legend and alt text.
 * @param {function} shakeIt - Polaroid event.
 */
function PokemonSearch() {
  const [selectedGen, setSelectedGen] = useState("gen1");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(mountApiUrl(selectedGen))
      .then((response) => response.json()) // Transforma o retorno json em dados
      .then((data) => {
        setPokemonList(data.results);
      });
  }, [selectedGen]);
  function handleSelectedGenChange(event) {
    setSelectedGen(event.target.value);
  }

  return (
    <PokemonSearchContext.Provider value={pokemonList}>
      <div className="pokemon_search">
        <div className="pokemon_search_side">
          <div className="pokemon_search_box">
            <h3>Escolha a geração</h3>
            <select value={selectedGen} onChange={handleSelectedGenChange}>
              <option value="gen1">Geração I</option>
              <option value="gen2">Geração II</option>
              <option value="gen3">Geração III</option>
              <option value="gen4">Geração IV</option>
              <option value="gen5">Geração V</option>
              <option value="gen6">Geração VI</option>
              <option value="gen7">Geração VII</option>
              <option value="gen8">Geração VIII</option>
            </select>
          </div>
          <PokemonBadge />
        </div>
        <div className="pokemon_search_main">
          <PokemonList />
        </div>
      </div>
    </PokemonSearchContext.Provider>
  );
}

export default PokemonSearch;
