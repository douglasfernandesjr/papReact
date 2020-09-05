import React, { useState, useEffect } from "react";
import "./Polaroid.css";

/**
 * @param {string} url - Polaroid image url
 * @param {string} text - Polaroid legend and alt text.
 * @param {function} shakeIt - Polaroid event.
 */
function Polaroid(props) {
  const [turnLeft, setTurnleft] = useState(true);
  const [classNames, setClassNames] = useState(turnLeft ? "left" : "right");

  useEffect(() => setClassNames(turnLeft ? "left" : "right"), [turnLeft]);

  let inner;

  if (props.children) {
    inner = props.children;
  } else {
    inner = <h3>{props.text}</h3>;
  }

  function handleClick() {
    setTurnleft(!turnLeft);
    if (props.shakeIt && props.shakeIt.call) {
      props.shakeIt();
    }
  }

  return (
    <div className={"polaroid " + classNames} onClick={handleClick}>
      <img src={props.url} alt={props.text}></img>
      {inner}
    </div>
  );
}

export default Polaroid;
