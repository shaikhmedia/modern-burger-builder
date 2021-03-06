import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BurgerController/BurgerControls";
import Modal from "../Layout/Modal/Modal";
import Loader from "../Layout/Loader/Loader";
import OrderSummary from "../Layout/OrderSummary/OrderSummary";
import * as burgerBuilderActions from "../../store/actions/burgerBuilder";

class BurgerBuilder extends Component {
  // Initial state
  state = {
    showModal: false,
    loading: false,
  };

  componentDidMount() {
    this.props.fetchIng();
  }

  // Show the modal and backdrop
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  // Hide the modal and backdrop
  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  // Functionning Yes button on Modal
  handleCheckoutYes = () => {
    // Initiating an empty array
    const queryParams = [];

    // Looping through ingredients object and pushing the keys = values to queryParams array
    for (let ing in this.state.ingredients) {
      queryParams.push(
        // ['bacon=0', 'cheese=0', 'meat=0', 'salad=0']
        `${encodeURIComponent(ing)}=${encodeURIComponent(
          this.state.ingredients[ing]
        )}`
      );
    }

    // Push the totalPrice to queryParams array
    queryParams.push(`price=${this.props.price}`);

    // Making the array an string joining with &
    const queryString = queryParams.join("&");

    // Pushing a new page to the stack with queryString as search to parse the data on checkout page
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  // Return true or false based on the price
  handleDisableOrder = () => {
    return this.props.price <= 4 ? true : false;
  };

  render() {
    // Copying the ingredient object
    const disableIngBtn = {
      ...this.props.ings,
    };

    // Convert the object to array and map through to change the value of the items either true or false
    Object.keys(disableIngBtn).map((cur) => {
      disableIngBtn[cur] = disableIngBtn[cur] <= 0;
    });

    // Set orderSummary and burgerandController to null initially
    let orderSummary = null;
    let burgerAndController = null;

    // Return burger, controller and orderSummary components if ingredients are loaded from server, else show the loader in place of the burger and controller
    if (this.props.ings) {
      burgerAndController = (
        <Fragment>
          <Burger ingredients={this.props.ings} />
          <BurgerControls
            orderDisable={this.handleDisableOrder()}
            showModal={this.handleShowModal}
            ingredients={this.props.ings}
            price={this.props.price}
            addIngredient={this.props.addIng}
            removeIngredient={this.props.removeIng}
            ingDisable={disableIngBtn}
          />
        </Fragment>
      );

      orderSummary = (
        <OrderSummary
          checkoutYes={this.handleCheckoutYes}
          price={this.props.price}
          Ing={this.props.ings}
          hide={this.handleHideModal}
        />
      );

      // Change order summary to loader if loading state is true
      if (this.state.loading) {
        orderSummary = <Loader />;
      }
    } else {
      burgerAndController = <Loader />;
    }

    return (
      // Return Burger, BurgerControl and Modal components to Layout
      <div>
        {/* Burger and controller components */}
        {burgerAndController}

        {/* Modal component with children */}
        <Modal hide={this.handleHideModal} show={this.state.showModal}>
          {orderSummary}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIng: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    removeIng: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    fetchIng: () => dispatch(burgerBuilderActions.fetchIngredients()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
