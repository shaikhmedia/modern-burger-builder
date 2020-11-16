import React, { Component } from "react";
import axios from "../../../../axios-orders";
import Loader from "../../../Layout/Loader/Loader";
import Form from "../../../Layout/Form/Form";

class ContactData extends Component {
  state = {
    loading: false,
    customer: {
      name: "",
      email: "",
      street: "",
      postCode: "",
    },
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      customer: {
        ...this.state.customer,
        [name]: value,
      },
    });
  };

  handleOrderSubmit = (e) => {
    e.preventDefault();
    // Set the loading state true to show the loader
    this.setState({
      loading: true,
    });

    // Create an object to post on database
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: this.state.customer,
      delivery: "fastest",
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
        <Form
          submitted={this.handleOrderSubmit}
          name={this.state.customer.name}
          email={this.state.customer.email}
          street={this.state.customer.street}
          postCode={this.state.customer.postCode}
          changed={this.handleInputChange}
          clicked={this.handleOrderSubmit}
        />
      );
    }
    return (
      <div>
        <p>Please enter your contact data 🙂 </p>
        {form}
      </div>
    );
  }
}

export default ContactData;
