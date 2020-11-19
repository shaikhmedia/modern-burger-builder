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

  render() {
    let order = (
      <div className={Styles.Orders}>
        {this.state.orders.map((order) => (
          <Order
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
