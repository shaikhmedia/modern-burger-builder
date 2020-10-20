import React from "react";
import Styles from "./Navbar.module.css";

const navbar = () => {
  return (
    <div className={Styles.Navbar}>
      <p>Logo</p>
      <ul>
        <li>
          <a href="">Order Summary</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
