import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderSearchContext } from '../../mocks/renderers';

import PokemonList from './PokemonList';

test('Lista nula', () => {
  renderSearchContext(null, <PokemonList />);

  expect(screen.getByTestId('no-content')).toBeInTheDocument();
});

test('Lista sem resultados', () => {
  renderSearchContext([], <PokemonList />);

  expect(screen.getByTestId('list-content')).toBeInTheDocument();
  expect(screen.getByTestId('list-content')).toBeEmpty();
});

test('Lista com itens', async () => {
  renderSearchContext([
    {url: '/pokemon/1'},
    {url: '/pokemon/2'},
    {url: '/pokemon/3'}], <PokemonList />);

  await waitForElementToBeRemoved(() => screen.getAllByText('carregando...'));
  expect(screen.queryAllByRole('img')).toHaveLength(3);
  expect(screen.queryAllByRole('heading')).toHaveLength(3);

  expect(screen.getByAltText('1 - Pokemon1')).toBeInTheDocument();
  expect(screen.getByAltText('2 - Pokemon2')).toBeInTheDocument();
  expect(screen.getByAltText('3 - Pokemon3')).toBeInTheDocument();

  expect(screen.getByText('1 - Pokemon1')).toBeInTheDocument();
  expect(screen.getByText('2 - Pokemon2')).toBeInTheDocument();
  expect(screen.getByText('3 - Pokemon3')).toBeInTheDocument();
});
