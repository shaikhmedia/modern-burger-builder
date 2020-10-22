import React, { Component } from "react";
import BurgerBuilder from "../Container/BurgerBuilder";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../Layout/SideDrawer/SideDrawer";
import Footer from "../Layout/Footer/Footer";
import EnvironmentalConcerns from "../Layout/EnvironmentalConcerns/EnvironmentalConcerns";

// Layout of the App
class Layout extends Component {
  state = {
    sideDrawerShow: false,
  };

  handleSideDrawerToggle = (prevSate) => {
    this.setState({
      sideDrawerShow: this.state.sideDrawerShow !== this.prevSate,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* SideDrawer */}
        <SideDrawer />

        {/* Navbar */}
        <Navbar />

        {/* Builder */}
        <BurgerBuilder />

        <EnvironmentalConcerns />

        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
