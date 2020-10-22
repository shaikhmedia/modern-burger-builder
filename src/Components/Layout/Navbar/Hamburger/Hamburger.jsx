import React from "react";
import Styles from "./Hamburger.module.css";
import MenuIcon from "../../../../Assets/menu.png";

const hamburger = (props) => {
  return (
    <div onClick={props.sideDrawerOpen}>
      <img className={Styles.MenuIcon} src={MenuIcon} alt="Menu Icon" />
    </div>
  );
};

export default hamburger;
