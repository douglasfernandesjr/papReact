import React, { useState, useEffect } from "react";
import "./Polaroid.css";

/**
 * @param {string} url - Polaroid image url
 * @param {string} text - Polaroid legend and alt text.
 */
function Polaroid(props) {
  const [turnLeft, setTurnleft] = useState(true);
  const [classNames, setClassNames] = useState(turnLeft ? "left" : "right");

  useEffect(() => setClassNames(turnLeft ? "left" : "right"), [turnLeft]);

  return (
    <div
      className={"polaroid " + classNames}
      onClick={() => setTurnleft(!turnLeft)}
    >
      <img src={props.url} alt={props.text}></img>
      <h3>{props.text}</h3>
    </div>
  );
}

export default Polaroid;
