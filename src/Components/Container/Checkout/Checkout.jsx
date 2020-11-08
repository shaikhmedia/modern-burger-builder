import React, { Component } from "react";
import SummaryPage from "../../Layout/SummaryPage/SummaryPage";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
import SideDrawer from "../../Layout/SideDrawer/SideDrawer";
import NavigationItems from "../../Layout/Navbar/NavigationItems/NavigationItmes";

class Checkout extends Component {
  state = {
    ingredients: {},
    loading: false,
    sideDrawerShow: false,
  };

  // Parse the query Params when the component is mounted
  componentDidMount() {
    // Getting the query
    const query = new URLSearchParams(this.props.location.search);
    console.log(query);

    // Ingredients as an empty object
    const ingredients = {};

    // Looping through the qery entries and setting ingredient's value and key to the object
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }

    // Updating the state
    this.setState({ ingredients: ingredients });
  }

  // Toggle Side Drawer
  handleSideDrawerToggle = () => {
    this.setState({ sideDrawerShow: !this.state.sideDrawerShow });
  };

  // Cancel checkout and go back to builder
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {};

  render() {
    return (
      <div>
        {/* SideDrawer */}
        <SideDrawer
          SDStatus={this.state.sideDrawerShow}
          hide={this.handleSideDrawerToggle}
        >
          <NavigationItems sideDrawerStatus={this.state.sideDrawerShow} />
        </SideDrawer>

        {/* NavBar */}
        <Navbar openSideDrawer={this.handleSideDrawerToggle} />

        {/* SummaryPage */}
        <SummaryPage
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Checkout;
