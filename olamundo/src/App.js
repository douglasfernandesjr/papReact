import React from 'react';
import './App.css';
import Polaroid from './components/Polaroid';

function App() {

  function moveMove(){
    console.log("I like to move it, move it!");
    console.log("⊂(▀¯▀⊂)⊂(▀¯▀⊂)");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Polaroid url="http://jardinagembelasflores.comunidades.net/1423066980_08/104_decoracao6.jpg" 
            text="Imagem Polaroid" shakeIt={moveMove} >
          <h1 style={{color:'green'}}>Imagem Polaroid</h1>
        </Polaroid>
      </header>
    </div>
  );
}

export default App;
