import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Checkout from "../src/Components/Container/Checkout/Checkout";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route path="/" exact component={Layout} />
      <Route path="/checkout" exact component={Checkout} />
    </div>
  );
};

export default App;
