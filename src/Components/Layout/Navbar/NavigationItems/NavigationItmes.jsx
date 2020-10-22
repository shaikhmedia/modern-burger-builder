import React from "react";
import Styles from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <ul className={Styles.Items}>
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
