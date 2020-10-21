import React from "react";
import Styles from "./Navbar.module.css";
import Logo from "../../../Assets/burger.png";

// Navbar component
const navbar = () => {
  return (
    <div className={Styles.Navbar}>
      <a href="">
        <img className={Styles.Logo} src={Logo} alt="Burger-Builder" />
      </a>
      <ul>
        <li>
          <a href="">Order Summary</a>
        </li>
        <li>
          <a className={Styles.active} href="">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
