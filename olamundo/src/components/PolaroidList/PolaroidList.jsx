import React from "react";
import Polaroid from "../Polaroid";

/**
 * @param {[]} List - Polaroid Array of {url:string, text:string, shakeIt:function }
 */
function PolaroidList(props) {
  return (
    <div className="polaroid_list">
      {props.list.map((item, i) => (
        <Polaroid key={i} url={item.url} text={item.text} shakeIt={item.shakeIt} />
      ))}
    </div>
  );
}

export default PolaroidList;
