
import React from 'react';
import { render, screen, act, wait, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../../mocks/server';

import PokemonSearch from './PokemonSearch';

const apiCall = rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
  const offset = req.url.searchParams.get('offset');
  let payload;
  if (offset === '0')
    payload = {
      results: [
        { url: '/pokemon/1' }
      ]
    };
  else
    payload = {
      results: [
        { url: '/pokemon/2' }
      ]
    };

  return res(
    ctx.set('access-control-allow-origin', '*'),
    ctx.json(payload));
});

beforeEach(() => server.use(apiCall));

test('Geração padrão', async () => {
  act(() => {
    render(<PokemonSearch />);
  });

  await wait(() => expect(screen.getByTestId('list-content')).not.toBeEmpty());
  await waitForElement(() => screen.queryAllByRole('img'));

  expect(screen.getByRole('combobox')).toHaveValue('gen1');
  expect(screen.getByRole('img', { name: '1 - Pokemon1' })).toHaveAttribute('src', 'img1.jpg');
});

test('Selecionar nova geração', async () => {
  act(() => {
    render(<PokemonSearch />);
  });

  act(() => {
      userEvent.selectOptions(screen.getByRole('combobox'), ['gen2']);
  });
  
  await wait(() => expect(screen.getByTestId('list-content')).not.toBeEmpty());
  await waitForElement(() => screen.queryAllByRole('img'));

  expect(screen.getByRole('combobox')).toHaveValue('gen2');
  expect(screen.getByRole('img', { name: '2 - Pokemon2' })).toHaveAttribute('src', 'img2.jpg');
});
