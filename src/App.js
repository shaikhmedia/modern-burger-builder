import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Checkout from "../src/Components/Container/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import ContactData from "../src/Components/Container/Checkout/ContactData/ContactData";
import BurgerBuilder from "./Components/Container/BurgerBuilder";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
      </Layout>
    </div>
  );
};

export default App;
