import React, { useContext } from "react";
import PokemonSearchContext from "../PokemonSearch/PokemonSearchContext";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const pokemonList = useContext(PokemonSearchContext);
  if (pokemonList != null) {
    return (
      <div>
        {pokemonList.map((item, i) => (
          <PokemonCard key={i} url={item.url}></PokemonCard>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PokemonList;
