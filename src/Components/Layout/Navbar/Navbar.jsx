import React from "react";
import Styles from "./Navbar.module.css";
import Logo from "../../../Assets/burger.png";
import Hamburger from "../Navbar/Hamburger/Hamburger";
import NavigationItems from "../Navbar/NavigationItems/NavigationItmes";
import { Link } from "react-router-dom";

// Navbar component
const navbar = (props) => {
  return (
    <div className={Styles.Navbar}>
      <Link to="/">
        <img className={Styles.Logo} src={Logo} alt="Burger-Builder" />
      </Link>
      <Hamburger sideDrawerOpen={props.openSideDrawer} />
      <NavigationItems />
    </div>
  );
};

export default navbar;
