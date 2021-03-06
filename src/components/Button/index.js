// Globals
import "./styles.scss";
import React from "react";

// Component
function Button(props) {
  return (
    <button className="qd-button" onClick={props.onClick} type="button">
      {props.children}
    </button>
  );
}

export { Button };
