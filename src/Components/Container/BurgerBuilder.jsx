import React, { Component } from "react";
import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BurgerController/BurgerControls";
import Modal from "../Layout/Modal/Modal";
import axios from "../../axios-orders";

const pricing = {
  cheese: 0.5,
  bacon: 0.7,
  meat: 1.3,
  salad: 0.4,
};

class BurgerBuilder extends Component {
  // Initial state
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 4,
    showModal: false,
    disableOrder: true,
  };

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
    // Create an object to post on database
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Alamin Shaikh",
        address: {
          street: "Dorga Road, Gollamari",
          thana: "Sonadanga",
          district: "Khulna",
          country: "Bangladesh",
        },
        email: "hello@test.com",
        phone: 1234567890,
      },
      delivery: "fastest",
    };

    // Post the object as json on database
    axios.post("/order.json", order);

    // Remove the modal
    this.handleHideModal();

    // Show order completion alert after .5 second
    setTimeout(() => {
      alert("Thanks! Your burger is on the way");
    }, 0.5);
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

    return (
      // Return Burger, BurgerControl and Modal components to Layout
      <div>
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
        <Modal
          checkoutYes={this.handleCheckoutYes}
          hide={this.handleHideModal}
          show={this.state.showModal}
          price={this.state.totalPrice}
          Ing={this.state.ingredients}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
