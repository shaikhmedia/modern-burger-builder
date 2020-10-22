import React from "react";
import Styles from "./NavigationItems.module.css";

const navigationItems = (props) => {
  let classes = [Styles.Items];
  if (props.sideDrawerStatus) {
    classes = [Styles.SDItems];
  }
  return (
    <ul className={classes.join(" ")}>
      <li>
        <a href="">Order Summary</a>
      </li>
      <li>
        <a className={Styles.active} href="">
          Home
        </a>
      </li>
    </ul>
  );
};

export default navigationItems;
