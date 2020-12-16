import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import SummaryPage from "../../Layout/SummaryPage/SummaryPage";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
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
              ingredients={this.props.ings}
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
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStatetoProps)(Checkout);
