import React, { Fragment } from "react";
import Styles from "./SideDrawer.module.css";
import Backdrop from "../Backdrop/Backdrop";

const sideDrawer = (props) => {
  if (props.SDStatus) {
    return (
      <Fragment>
        <div className={Styles.SideDrawer}>{props.children}</div>
        <Backdrop hiden={props.hide} />
      </Fragment>
    );
  } else {
    return null;
  }
};

export default sideDrawer;
