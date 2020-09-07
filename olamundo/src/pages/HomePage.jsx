import React from 'react';
import logo from '../logo.svg';

function HomePage() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Escolha uma página no menu superior
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
}

export default HomePage;
