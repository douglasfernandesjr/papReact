import React, { useContext } from "react";
import PokemonSearchContext from "./PokemonSearchContext";
import "./PokemonBadge.css";

function PokemonBadge() {
  const pokemonList = useContext(PokemonSearchContext);
  let qtd = pokemonList != null ? pokemonList.length : 0;
  return (
    <div id="boulder-badge">
      <div className="badge">
        <div className="part part-1"></div>
        <div className="part part-2"></div>
        <div className="part part-3"></div>
        <div className="part part-4"></div>
        <div className="part part-shade"></div>
      </div>
      <h3>Esta geração possui {qtd} pokemons!</h3>
    </div>
  );
}

export default PokemonBadge;
