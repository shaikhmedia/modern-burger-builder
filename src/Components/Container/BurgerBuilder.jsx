import React, { Component, Fragment } from "react";
import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BurgerController/BurgerControls";
import Modal from "../Layout/Modal/Modal";
import Loader from "../Layout/Loader/Loader";
import axios from "../../axios-orders";
import OrderSummary from "../Layout/OrderSummary/OrderSummary";

const pricing = {
  cheese: 0.5,
  bacon: 0.7,
  meat: 1.3,
  salad: 0.4,
};

class BurgerBuilder extends Component {
  // Initial state
  state = {
    ingredients: null,
    totalPrice: 4,
    showModal: false,
    disableOrder: true,
    loading: false,
  };

  // Fetch the ingredients from database
  componentDidMount() {
    axios
      .get("https://burger-builder-41792.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Add item in burger
  handleAddIngredient = (type) => {
    // Increase the value of the items by 1
    const increaseAmount = this.state.ingredients[type] + 1;
    // Create a new ingredient object spreading the initial state array
    const ingredients = {
      ...this.state.ingredients,
    };

    // Set the value of the items in object to the updated value
    ingredients[type] = increaseAmount;

    const addedPrice = pricing[type];
    const updatedPrice = this.state.totalPrice + addedPrice;

    // Update the state with updaged ingredients object and total price
    this.setState({
      ingredients: ingredients,
      totalPrice: updatedPrice,
    });

    // Pass the updated price to update orderDisable state
    this.handleDisableOrder(updatedPrice);
  };

  // Remove item from burger
  handleRemoveIngredient = (type) => {
    // Return this function if the value of items in ingredients object is 0
    if (this.state.ingredients[type] === 0) {
      return;
    }
    // Decrease the value of the items by 1
    const decreaseAmount = this.state.ingredients[type] - 1;
    // Create a new ingredient object spreading the initial state array
    const ingredients = {
      ...this.state.ingredients,
    };
    // Set the value of the items in object to the updated value
    ingredients[type] = decreaseAmount;

    const price = this.state.totalPrice;
    const updatedPrice = price - pricing[type];

    // Update the state with updaged ingredients object and total price
    this.setState({ ingredients: ingredients, totalPrice: updatedPrice });

    // Pass the updated price to update orderDisable state
    this.handleDisableOrder(updatedPrice);
  };

  // Show the modal and backdrop
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  // Hide the modal and backdrop
  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  // Disable order button if the total price is less than or equal to 4
  handleDisableOrder = (updatedPrice) => {
    this.setState({ disableOrder: updatedPrice <= 4 });
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
    queryParams.push(`price=${this.state.totalPrice}`);

    // Making the array an string joining with &
    const queryString = queryParams.join("&");

    // Pushing a new page to the stack with queryString as search to parse the data on checkout page
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    // Copying the ingredient object
    const disableIngBtn = {
      ...this.state.ingredients,
    };

    // Convert the object to array and map through to change the value of the items either true or false
    Object.keys(disableIngBtn).map((cur) => {
      disableIngBtn[cur] = disableIngBtn[cur] <= 0;
    });

    // Set orderSummary and burgerandController to null initially
    let orderSummary = null;
    let burgerAndController = null;

    // Return burger, controller and orderSummary components if ingredients are loaded from server, else show the loader in place of the burger and controller
    if (this.state.ingredients) {
      burgerAndController = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControls
            orderDisable={this.state.disableOrder}
            showModal={this.handleShowModal}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            addIngredient={this.handleAddIngredient}
            removeIngredient={this.handleRemoveIngredient}
            ingDisable={disableIngBtn}
          />
        </Fragment>
      );

      orderSummary = (
        <OrderSummary
          checkoutYes={this.handleCheckoutYes}
          price={this.state.totalPrice}
          Ing={this.state.ingredients}
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

export default BurgerBuilder;
