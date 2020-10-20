import React, { Component } from "react";
import BurgerBuilder from "../Container/BurgerBuilder";
import Navbar from "./Navbar/Navbar";

// Layout of the App
const layout = (props) => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar />
      {/* Builder */}
      <BurgerBuilder />
    </React.Fragment>
  );
};

export default layout;
