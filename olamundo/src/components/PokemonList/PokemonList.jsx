import React, { useContext } from "react";
import PokemonSearchContext from "../PokemonSearch/PokemonSearchContext";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const pokemonList = useContext(PokemonSearchContext);
  if (pokemonList != null) {
    return (
      <div data-testid="list-content">
        {pokemonList.map((item, i) => (
          <PokemonCard key={i} url={item.url}></PokemonCard>
        ))}
      </div>
    );
  } else {
    return <div data-testid="no-content"></div>;
  }
}

export default PokemonList;
