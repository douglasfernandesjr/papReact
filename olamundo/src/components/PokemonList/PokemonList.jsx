import React, { useContext } from "react";
import PokemonSearchContext from "../PokemonSearch/PokemonSearchContext";

function PokemonList() {
  const pokemonList = useContext(PokemonSearchContext);
  if (pokemonList != null) {
    return (
      <div>
        {pokemonList.map((item, i) => (
          <div key={i}>
            <h3>{item.name}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Mais Informações
            </a>
          </div>
        ))}
      </div>
    );
  }else{
      return <div></div>
  }
}

export default PokemonList;
