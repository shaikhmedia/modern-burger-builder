import React, { Component } from "react";
import Button from "../../../Layout/Button/Button";
import Styles from "./ContactData.module.css";
import axios from "../../../../axios-orders";
import Loader from "../../../Layout/Loader/Loader";

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
        <React.Fragment>
          <h4>Please enter your contact details!</h4>
          <form onSubmit={this.handleOrderSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.customer.name}
              onChange={this.handleInputChange}
              placeholder="Your name"
            />
            <input
              type="text"
              name="email"
              value={this.state.customer.email}
              onChange={this.handleInputChange}
              placeholder="Your email"
            />
            <input
              type="text"
              name="street"
              placeholder="Street Addres"
              value={this.state.customer.street}
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              name="postCode"
              value={this.state.customer.postCode}
              onChange={this.handleInputChange}
              placeholder="Post code"
            />
            <Button clicled={this.handleOrderSubmit} btnType="Success">
              ORDER NOW
            </Button>
          </form>
        </React.Fragment>
      );
    }
    return <div className={Styles.ContactData}>{form}</div>;
  }
}

export default ContactData;