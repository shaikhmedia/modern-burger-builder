import React, { Component, Fragment } from "react";
import Order from "./Order/Order";
import Styles from "./Orders.module.css";
import axios from "../../../axios-orders";
import Loader from "../../Layout/Loader/Loader";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  // Get the data from server and put on UI when component mounts
  componentDidMount() {
    this.setState({ loading: true });
    axios.get("/order.json").then((res) => {
      const orders = [];

      // Loop through results data and push an object of orders and id in orders array
      for (let key in res.data) {
        orders.push({ ...res.data[key], id: key });
      }

      // Update the state
      this.setState({ orders: orders, loading: false });
    });
  }

  // Delete item from UI and server
  handleDeleteItem = (id) => {
    const orders = this.state.orders;

    const updatedOrders = orders.filter((order) => {
      // Return and array with all orders which id doesn't match with the one that is clicked
      return order.id !== id;
    });

    // Update the state with udpated orders
    this.setState({ orders: updatedOrders });

    // ToDo
    // Remove from server as well
  };

  render() {
    // Return order data with Order component
    let order = (
      <div className={Styles.Orders}>
        {this.state.orders.map((order, i) => (
          <Order
            deleteItem={() => this.handleDeleteItem(order.id)}
            key={order.id}
            price={Number.parseFloat(order.price).toFixed(2)}
            ingredients={{ ...order.ingredients }}
            customers={{ ...order.customer }}
            delivery={order.delivery}
          />
        ))}
      </div>
    );

    if (this.state.loading) {
      order = <Loader />;
    }

    return <Fragment>{order}</Fragment>;
  }
}

export default Orders;
