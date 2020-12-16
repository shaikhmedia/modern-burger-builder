import React, { Component } from "react";
import axios from "../../../../axios-orders";
import { connect } from "react-redux";

import Loader from "../../../Layout/Loader/Loader";
import Form from "../../../Layout/Form/Form";

class ContactData extends Component {
  state = {
    loading: false,
    customer: {
      name: "",
      email: "",
      password: "",
      street: "",
      ZIP: "",
    },
    delivery: "",
  };

  // Handle the change on input
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Get customer object from state and set key value according to target's name and value
    this.setState({
      customer: {
        ...this.state.customer,
        [name]: value,
      },
    });
  };

  // Get choosen deliver method and set to state
  handleDeliveryMethod = (e) => {
    const value = e.target.value;

    // Update the state
    this.setState({ delivery: value });
  };

  handleOrderSubmit = (e) => {
    e.preventDefault();
    // Set the loading state true to show the loader
    this.setState({
      loading: true,
    });

    let price = this.props.price;

    if (this.state.delivery === "fastest") {
      price += 2;
    }

    // Create an object to post on database
    const order = {
      ingredients: this.props.ings,
      price: price,
      customer: this.state.customer,
      delivery: this.state.delivery,
    };

    // Post the object as json on database
    axios
      .post("/order.json", order)
      .then((response) => {
        // Remove the loader and the modal turning loading state and showModal state false when the order data is posted on server
        this.setState({ loading: false });

        // Once posted to server push the home page to stack
        this.props.history.push("/");
      })
      .catch((error) => {
        // Remove the loader and the modal turning loading state and showModal state false when there is an error
        this.setState({ loading: false });
      });
  };

  render() {
    let form = null;

    if (this.state.loading) {
      form = <Loader />;
    } else {
      form = (
        <div>
          <Form
            submitted={this.handleOrderSubmit}
            name={this.state.customer.name}
            email={this.state.customer.email}
            street={this.state.customer.street}
            postCode={this.state.customer.postCode}
            changed={this.handleInputChange}
            clicked={this.handleOrderSubmit}
            customerData={this.state.customer}
            deliveryMethod={this.handleDeliveryMethod}
          />
        </div>
      );
    }
    return <div>{form}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ContactData);
