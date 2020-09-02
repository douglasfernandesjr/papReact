import React from "react";

function Polaroid() {
  const urlImg =
    "http://jardinagembelasflores.comunidades.net/1423066980_08/104_decoracao6.jpg";
  const text = "Imagem Polaroid";
  return (
    <div className="polaroid">
      <img src={urlImg} alt={text}></img>
      <h3>{text}</h3>
    </div>
  );
}

export default Polaroid;
