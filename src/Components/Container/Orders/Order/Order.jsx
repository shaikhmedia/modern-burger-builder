import React from "react";
import Styles from "./Order.module.css";

const Order = (props) => {
  const ingArry = Object.entries(props.ingredients);

  const ingOutput = ingArry.map((ing) => {
    return (
      <ul className={Styles.Ing} key={ing[0]}>
        <li>{ing[0]}</li>: {ing[1]}
      </ul>
    );
  });

  const customerArr = Object.entries(props.customers);

  const customerData = customerArr.map((data) => {
    return (
      <ul className={Styles.Ing} key={data[0]}>
        <li>{data[0]}</li>: {data[1]}
      </ul>
    );
  });

  return (
    <div className={Styles.Order}>
      <p className={Styles.Color}>Customer's Details</p> {customerData}
      <p className={Styles.Color}>Ingredients:</p> {ingOutput}
      <p>
        Price: <span className={Styles.Color}>${props.price}</span>{" "}
      </p>
    </div>
  );
};

export default Order;
