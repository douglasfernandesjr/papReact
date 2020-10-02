import React from 'react';
import { render, screen } from '@testing-library/react';

import PokemonBadge from './PokemonBadge';
import PokemonSearchContext from './PokemonSearchContext';

function renderPokemonSearchContext(lista, ui) {
  return render(
    <PokemonSearchContext.Provider value={lista}>
      {ui}
    </PokemonSearchContext.Provider>
  )
}

test('Contexto sem lista', () => {
  renderPokemonSearchContext(null, <PokemonBadge />);

  expect(screen.getByText(/pokemons!$/)).toHaveTextContent('Esta geração possui 0 pokemons!');
});

test('Contexto com lista vazia', () => {
  renderPokemonSearchContext([], <PokemonBadge />);

  expect(screen.getByText(/pokemons!$/)).toHaveTextContent('Esta geração possui 0 pokemons!');
});

test('Context com lista', () => {
  renderPokemonSearchContext(new Array(3), <PokemonBadge />);

  expect(screen.getByText(/pokemons!$/)).toHaveTextContent('Esta geração possui 3 pokemons!');
});
