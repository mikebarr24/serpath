import "./Button.scss";
import React from "react";

export default function Button(props) {
  let activeStyle;
  if (props.active === false) {
    activeStyle = {
      opacity: "0.4",
      cursor: "not-allowed",
    };
  }

  return (
    <a href={props.link} download={props.download ? true : false}>
      <button className={props.buttonClass} style={activeStyle}>
        {props.name}
      </button>
    </a>
  );
}
