import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

it('Deve mostrar mensagem e link', () => {
  render(<HomePage />);

  expect(screen.getByTestId('texto')).toHaveTextContent('Escolha uma página no menu superior');
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});
