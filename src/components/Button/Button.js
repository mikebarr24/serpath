import "./Button.scss";
import React from "react";

export default function Button(props) {
  const [isActive, setIsActive] = React.useState(true);
  return (
    <a href={props.link}>
      <button className={props.buttonClass}>{props.name}</button>
    </a>
  );
}
