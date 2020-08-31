import React from "react";

function CoolTitle(props) {
  const titulo = props.info ?? "Olá, mundo!";
  return <h1>{titulo}</h1>;
}

export default CoolTitle;
