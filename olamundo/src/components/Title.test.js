import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Title from './Title';

test('Mensagem padrão', () => {
  render(<Title />);
  //Use para debugar o HTML gerado
  //screen.debug();

  expect(screen.getByText(/Olá, mundo!/i)).toBeInTheDocument();
  expect(screen.getByTestId('input')).toHaveValue('Olá, mundo!');
});

test('Mensagem via props', () => {
  render(<Title info="Mensagem via props" />);

  expect(screen.getByText(/Mensagem via props/i)).toBeInTheDocument();
  expect(screen.getByTestId('input')).toHaveValue('Mensagem via props');
});

test('Alterar a mensagem', () => {
  render(<Title />);

  fireEvent.change(screen.getByTestId('input'), { target: { value: 'teste' } });

  expect(screen.getByText(/teste/i)).toBeInTheDocument();
  expect(screen.getByTestId('input')).toHaveValue('teste');
});

// Não funciona. FireEvent não dispara os eventos como o browser
// test('alterar a mensagem por keypress', () => {
//   render(<Title />);

//   fireEvent.keyPress(screen.getByTestId('input'), { key: 'a', code: 'KeyA' });

//   expect(screen.getByText(/teste/i)).toBeInTheDocument();
//   expect(screen.getByTestId('input')).toHaveValue('teste');
// });
