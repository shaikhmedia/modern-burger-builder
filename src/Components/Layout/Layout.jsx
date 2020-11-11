import React, { Component } from "react";
import BurgerBuilder from "../Container/BurgerBuilder";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../Layout/SideDrawer/SideDrawer";
import Footer from "../Layout/Footer/Footer";
import NavigationItems from "../Layout/Navbar/NavigationItems/NavigationItmes";

// Layout of the App
class Layout extends Component {
  state = {
    sideDrawerShow: false,
  };

  handleSideDrawerToggle = () => {
    this.setState({ sideDrawerShow: !this.state.sideDrawerShow });
  };

  render() {
    return (
      <React.Fragment>
        {/* SideDrawer */}
        <SideDrawer
          SDStatus={this.state.sideDrawerShow}
          hide={this.handleSideDrawerToggle}
        >
          <NavigationItems sideDrawerStatus={this.state.sideDrawerShow} />
        </SideDrawer>

        {/* Navbar */}
        <Navbar openSideDrawer={this.handleSideDrawerToggle} />

        {/* Any component goes here as children */}
        {this.props.children}

        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
