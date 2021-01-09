import React from 'react';
import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CoolTitle from './CoolTitle';

test('Mensagem padrão', () => {
  const { container } = render(<CoolTitle />);
  //Lista roles contidos no elemento
  //logRoles(container);

  expect(screen.getByText(/Olá, mundo!/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveValue('Olá, mundo!');
});

test('Mensagem via props', () => {
  render(<CoolTitle info="Mensagem via props" />);

  expect(screen.getByText(/Mensagem via props/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveValue('Mensagem via props');
});

test('Alterar a mensagem', () => {
  render(<CoolTitle />);

  userEvent.clear(screen.getByRole('textbox'));
  userEvent.type(screen.getByRole('textbox'), 'teste');

  expect(screen.getByText(/teste/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveValue('teste');
});
