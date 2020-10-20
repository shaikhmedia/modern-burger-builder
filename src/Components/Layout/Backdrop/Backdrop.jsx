import React from "react";
import Styles from "./Backdrop.module.css";

// Backdrop component
const backdrop = (props) => {
  return <div onClick={props.hiden} className={Styles.Backdrop}></div>;
};

export default backdrop;
