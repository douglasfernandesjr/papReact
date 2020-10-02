import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Polaroid from './Polaroid';

describe('Carregamento Inicial', () => {
  test('Sem children', () => {
    render(<Polaroid url="img.jpg" text="Image Text" />);
  
    expect(screen.queryByRole('img', { name: 'Image Text' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Image Text' })).toHaveAttribute('src', 'img.jpg');
    expect(screen.getByText('Image Text')).toBeInTheDocument();
  });
  
  test('Com children', () => {
    render(<Polaroid url="img.jpg" text="Image Text"><div>Props children</div></Polaroid>);
  
    expect(screen.queryByRole('img', { name: 'Image Text' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Image Text' })).toHaveAttribute('src', 'img.jpg');
    //Se utilizar getByRole neste caso, a query retornará exceção antes de ser possível de se fazer o assert
    expect(screen.queryByRole('Image Text')).not.toBeInTheDocument();
    expect(screen.getByText(/Props children/)).toBeInTheDocument();
  });
});

describe('Rotação da imagem', () => {
  test('Sem função shakeIt', () => {
    render(<Polaroid url="img.jpg" text="Image Text" />);
  
    //Alguns asserts só funcionam para um elemento
    //expect(screen.getAllByRole('generic')).toHaveClass('polaroid left');
  
    expect(screen.getByTestId('polaroid')).toHaveClass('left');
    //Colocar toda ação que causa update no seu componente dentro da função act
    act(() => {
      userEvent.click(screen.getByTestId('polaroid'));
    })
    expect(screen.getByTestId('polaroid')).toHaveClass('right');
  });
  
  test('Com função shakeIt', () => {
    render(<Polaroid url="img.jpg" text="Image Text" shakeIt={() => {}} />);
  
    expect(screen.getByTestId('polaroid')).toHaveClass('left');
    act(() => {
      userEvent.click(screen.getByTestId('polaroid'));
    })
    expect(screen.getByTestId('polaroid')).toHaveClass('right');
  });
});

test('Função shakeIt', () => {
  const callback = jest.fn();
  render(<Polaroid url="img.jpg" text="Image Text" shakeIt={callback} />);
  
  act(() => {
    userEvent.click(screen.getByTestId('polaroid'));
  })
  expect(callback).toHaveBeenCalled();
});
