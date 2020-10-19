import React, { Component } from "react";
import BurgerBuilder from "../Burger/BurgerBuilder";

// Layout of the App
const layout = () => {
  return (
    <div>
      {/* Navbar */}
      <p>Navbar</p>
      {/* Builder */}
      <BurgerBuilder />
    </div>
  );
};

export default layout;
