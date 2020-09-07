import React from "react";
import PokemonCard from "../components/PokemonList/PokemonCard";
import { useParams } from "react-router-dom";

function PokemonCardPage() {
  let { id } = useParams();

  if (id) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;

    return <PokemonCard url={url} />;
  }
  return <>Carregando....</>;
}

export default PokemonCardPage;
