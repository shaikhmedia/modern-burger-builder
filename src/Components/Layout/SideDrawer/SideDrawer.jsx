import React from "react";
import Styles from "./SideDrawer.module.css";
import NavigationItems from "../Navbar/NavigationItems/NavigationItmes";

const sideDrawer = (props) => {
  if (props.toggleSideDrawer) {
    return (
      <React.Fragment>
        <div className={Styles.SideDrawer}>
          <NavigationItems />
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default sideDrawer;
