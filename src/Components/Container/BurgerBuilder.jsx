import React, { Component } from "react";
import Burger from "../Burger/Burger";
import BurgerControls from "../Burger/BurgerController/BurgerControls";
import Modal from "../Layout/Modal/Modal";
// import Backdrop from "../Layout/Backdrop/Backdrop";

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
  };
  // Disable less and orderNow button if there is no ingredients added
  // handlePurchaseAble = (ingredients) => {
  //   // Convert the ingredient object's values to an array and reduce it to get the total
  //   const sum = Object.values(ingredients).reduce((acc, cur) => {
  //     return acc + cur;
  //   }, 0);
  //   // Return true if the sum is less than 1
  //   return sum < 1;
  // };

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
    const newPrice = this.state.totalPrice + addedPrice;

    // Update the state with updated object
    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice,
    });
    // this.handlePurchaseAble(ingredients);
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

    this.setState({ ingredients: ingredients, totalPrice: updatedPrice });
    // this.handlePurchaseAble(ingredients);
  };

  // Show the modal and backdrop
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  // Hide the modal and backdrop
  handleHideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    // Copying the ingredient object
    const disableStatus = {
      ...this.state.ingredients,
    };

    // Conver the object to array and map through to change the value of the items either true or false
    Object.keys(disableStatus).map((cur) => {
      disableStatus[cur] = disableStatus[cur] <= 0;
    });

    return (
      // Return Burger and BurgerControl component to Layout
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          showModal={this.handleShowModal}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          addIngredient={this.handleAddIngredient}
          removeIngredient={this.handleRemoveIngredient}
          disableInfo={disableStatus}
        />
        <Modal
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
