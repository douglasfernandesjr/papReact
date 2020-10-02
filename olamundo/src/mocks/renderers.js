import React from 'react';
import { render } from '@testing-library/react'
import PokemonSearchContext from "../components/PokemonSearch/PokemonSearchContext";

const SearchContextProvider = (lista) => ({children}) => {
  return(
    <PokemonSearchContext.Provider value={lista}>
      {children}
    </PokemonSearchContext.Provider>
  )
}

export const renderSearchContext = (lista, ui, options) =>
  render(ui, { wrapper: SearchContextProvider(lista), ...options });