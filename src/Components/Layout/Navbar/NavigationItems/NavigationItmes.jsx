import React from "react";
import Styles from "./NavigationItems.module.css";
import { Link } from "react-router-dom";

const navigationItems = (props) => {
  let classes = [Styles.Items];
  if (props.sideDrawerStatus) {
    classes = [Styles.SDItems];
  }
  return (
    <ul className={classes.join(" ")}>
      <li onClick={props.hideSideDrawer}>
        <Link to="/orders" href="">
          Orders
        </Link>
      </li>
      <li onClick={props.hideSideDrawer}>
        <Link to="/" className={Styles.active} href="">
          Burger Builder
        </Link>
      </li>
    </ul>
  );
};

export default navigationItems;
