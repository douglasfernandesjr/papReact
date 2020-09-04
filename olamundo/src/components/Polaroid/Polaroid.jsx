import React from "react";
import './Polaroid.css';

/**
 * @param {string} url - Polaroid image url
 * @param {string} text - Polaroid legend and alt text.
 */
function Polaroid(props) {
  return (
    <div className="polaroid">
        <img src={props.url} alt={props.text}></img>
        <h3>{props.text}</h3>
    </div >);
}

export default Polaroid;
