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

      for (let key in res.data) {
        orders.push({ ...res.data[key], id: key });
      }

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

    const orderObject = { ...updatedOrders };

    this.setState({ orders: updatedOrders });

    axios.put("/order.json", orderObject);
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
            deliver={order.delivery}
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
