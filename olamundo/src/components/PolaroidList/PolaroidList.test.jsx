import React from 'react';
import { render, screen } from '@testing-library/react';

import PolaroidList from './PolaroidList';

test('Lista com itens', () => {
  const lista = [{
    url: 'img1.jpg',
    text: 'Imagem1',
    shakeIt: () => {}
  }, {
    url: 'img2.jpg',
    text: 'Imagem2'
  }];

  render(<PolaroidList list={lista} />);

  expect(screen.getAllByRole('img')).toHaveLength(2);
})

test('Lista vazia', () => {
  render(<PolaroidList list={[]} />);

  expect(screen.queryAllByRole('img')).toHaveLength(0);
});
