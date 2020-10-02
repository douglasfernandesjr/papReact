import React, { useState, useEffect } from "react";
import "./PokemonCard.css";
import Polaroid from "../Polaroid/Polaroid";

/**
 * @param {string} url - Pokemon API get URL
 */
function PokemonCard(props) {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  useEffect(() => {
    if (!props.url)
      return;

    fetch(props.url)
      .then((resp) => resp.json())
      .then((info) => setPokemonInfo(info));
  }, [props.url]);

  if (pokemonInfo != null) {
    let url = pokemonInfo.sprites.other["official-artwork"].front_default;
    let displayName = pokemonInfo.id +" - "+pokemonInfo.species.name;
    return (
      <div className="pokemon_card">
        <Polaroid
          url={url}
          text={displayName}
        ></Polaroid>
      </div>
    );
  } else {
    return <div>carregando...</div>;
  }
}

export default PokemonCard;
