import React, { Fragment } from "react";
import Styles from "./SideDrawer.module.css";
import Backdrop from "../Backdrop/Backdrop";

const sideDrawer = (props) => {
  if (props.sideDrawerStatus) {
    return (
      <Fragment>
        <div className={Styles.SideDrawer}>{props.children}</div>
        <Backdrop hiden={props.SDStatus} />
      </Fragment>
    );
  } else {
    return null;
  }
};

export default sideDrawer;
