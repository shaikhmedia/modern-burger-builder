import React from "react";
import Styles from "./Navbar.module.css";
import Logo from "../../../Assets/burger.png";
import Hamburger from "../Navbar/Hamburger/Hamburger";
import NavigationItems from "../Navbar/NavigationItems/NavigationItmes";

// Navbar component
const navbar = (props) => {
  return (
    <div className={Styles.Navbar}>
      <a href="">
        <img className={Styles.Logo} src={Logo} alt="Burger-Builder" />
      </a>
      <Hamburger sideDrawerOpen={props.openSideDrawer} />
      <NavigationItems />
    </div>
  );
};

export default navbar;
