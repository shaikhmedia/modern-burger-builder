import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Checkout from "../src/Components/Container/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./Components/Container/BurgerBuilder";
import Orders from "./Components/Container/Orders/Orders";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" exact component={Orders} />
      </Layout>
    </div>
  );
};

export default App;
