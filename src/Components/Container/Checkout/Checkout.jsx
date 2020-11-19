import React, { Component } from "react";
import SummaryPage from "../../Layout/SummaryPage/SummaryPage";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      cheese: 1,
      bacon: 1,
      meat: 1,
      salad: 1,
    },
    price: 0,
  };

  // Parse the query Params when the component is mounted
  componentWillMount() {
    // Getting the queryParam String
    const query = new URLSearchParams(this.props.location.search);

    // Ingredients as an empty object
    let ingredients = {};
    let price = 0;

    // Looping through the qery entries and setting ingredient's value and key to the object
    // query.entries() = {['bacon', '0'], ['cheese', '0'], ['meat', '0'], ['salad', '0'], ['price', '0']}
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    // Updating the state
    this.setState({ ingredients: ingredients, price: price });
  }

  // Cancel checkout and go back to builder
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        {/* SummaryPage */}
        <Route
          path="/checkout"
          exact
          render={(props) => (
            <SummaryPage
              ingredients={this.state.ingredients}
              checkoutCancelled={this.checkoutCancelledHandler}
              checkoutContinued={this.checkoutContinuedHandler}
              {...props}
            />
          )}
        />

        {/* ContactData */}
        <Route
          path={this.props.match.path + "/contact-data"}
          exact
          render={(props) => (
            <ContactData
              ingredients={{ ...this.state.ingredients }}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
