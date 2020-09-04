import React from 'react';
import './App.css';
import Polaroid from './components/Polaroid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Polaroid url="http://jardinagembelasflores.comunidades.net/1423066980_08/104_decoracao6.jpg" text="Imagem Polaroid" >
        </Polaroid>
      </header>
    </div>
  );
}

export default App;
