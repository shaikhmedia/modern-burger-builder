import React from "react";
import Styles from "./Button.module.css";

const button = (props) => {
  return (
    <button
      onSubmit={props.submited}
      onClick={props.clicked}
      className={[Styles.Button, Styles[props.btnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default button;
