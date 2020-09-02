import React, { useState } from "react";

function CoolTitle(props) {
  const titulo = props.info ?? "Olá, mundo!";

  const [title, setTitle] = useState(titulo);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input type="text" name="name" value={title} onChange={handleChange} />
      <h1>{title}</h1>
    </div>
  );
}

export default CoolTitle;
