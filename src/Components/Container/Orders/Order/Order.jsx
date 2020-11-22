import React from "react";
import Styles from "./Order.module.css";
import Button from "../../../Layout/Button/Button";

const Order = (props) => {
  //Convert objects in array of objects
  const ingArry = Object.entries(props.ingredients);

  // Loop through the array and make list itmes for ingredients
  const ingOutput = ingArry.map((ing) => {
    return (
      <ul className={Styles.Ing} key={ing[0]}>
        <li>{ing[0]}</li>: {ing[1]}
      </ul>
    );
  });

  //Convert objects in array of objects
  const customerArr = Object.entries(props.customers);

  // Loop through the array and make list itmes for customer data
  const customerData = customerArr.map((data) => {
    return (
      <ul className={Styles.Ing} key={data[0]}>
        <li>{data[0]}</li>: {data[1]}
      </ul>
    );
  });

  return (
    // Return order component
    <div className={Styles.Order}>
      <p className={Styles.Color}>Customer's Details</p> {customerData}
      <p className={Styles.Color}>Ingredients:</p> {ingOutput}
      <p>
        Price: <span className={Styles.Color}>${props.price}</span>{" "}
      </p>
      <Button
        style={{
          height: "2rem",
          width: "7rem",
          padding: "5px 10px",
          fontSize: ".8rem",
          backgroundColor: "green",
          color: "white",
        }}
        clicked={props.deleteItem}
      >
        Shipped
      </Button>
    </div>
  );
};

export default Order;
