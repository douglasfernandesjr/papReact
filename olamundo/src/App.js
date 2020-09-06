import React from "react";
import "./App.css";
import PolaroidList from "./components/PolaroidList/PolaroidList";

function App() {
  function moveMove() {
    console.log("I like to move it, move it!");
    console.log("⊂(▀¯▀⊂)⊂(▀¯▀⊂)");
  }

  let polaroidList = [
    {
      url: "http://jardinagembelasflores.comunidades.net/1423066980_08/104_decoracao6.jpg",
      text: "Imagem Polaroid",
      shakeIt: moveMove,
    },
    {
      url: "https://s2.glbimg.com/WpmBvZZRHmk1Y3hPwq4KHVNuXbA=/e.glbimg.com/og/ed/f/original/2018/12/18/winner_nian-wang.jpg",
      text: "Adivinha o que é isso?",
    },
    {
      url: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/02/instinto-superior-goku-1.jpg",
      text: "Oi, eu sou o Goku",
      shakeIt: moveMove,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <PolaroidList list={polaroidList} />
      </header>
    </div>
  );
}

export default App;
