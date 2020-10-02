import React from 'react';
import { screen } from '@testing-library/react';
import { renderSearchContext } from '../../mocks/renderers';

import PokemonBadge from './PokemonBadge';

test('Contexto sem lista', () => {
  renderSearchContext(null, <PokemonBadge />);

  expect(screen.getByText(/pokemons!$/)).toHaveTextContent('Esta geração possui 0 pokemons!');
});

test('Contexto com lista vazia', () => {
  renderSearchContext([], <PokemonBadge />);

  expect(screen.getByText(/pokemons!$/)).toHaveTextContent('Esta geração possui 0 pokemons!');
});

test('Context com lista', () => {
  renderSearchContext(new Array(3), <PokemonBadge />);

  expect(screen.getByText(/pokemons!$/)).toHaveTextContent('Esta geração possui 3 pokemons!');
});
