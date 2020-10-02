import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import PokemonCard from './PokemonCard';

test('Carregamento do Card', async () => {
  render(<PokemonCard url="/pokemon/1" />);

  expect(screen.getByText('carregando...')).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.queryByText('carregando...'));
  
  expect(screen.getByRole('img', { name: '1 - Pokemon1' })).toHaveAttribute('src', 'img1.jpg');
  expect(screen.getByText('1 - Pokemon1')).toBeInTheDocument();
});
