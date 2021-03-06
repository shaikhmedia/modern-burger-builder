import React, { Fragment } from "react";
import Styles from "./OrderSummary.module.css";
import Button from "../Button/Button";

const orderSummary = (props) => {
  // convert and map the ingredients obj and return a list for each Ingredient
  const ingList = Object.keys(props.Ing).map((cur) => {
    return (
      <li key={cur} className={Styles.Case}>
        {cur}: {props.Ing[cur]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3 className={Styles.General} style={{ paddingTop: 0 }}>
        Your Order
      </h3>
      <p className={Styles.General}>
        A delicious burger with following ingredients:
      </p>
      {ingList}
      <h4 className={Styles.General}>Total Price: ${props.price.toFixed(2)}</h4>
      <p className={Styles.General}>Continue to checkout?</p>
      <div>
        <Button clicked={props.checkoutYes} btnType="Success">
          Continue
        </Button>
        <Button clicked={props.hide} btnType="Danger">
          Cancel
        </Button>
      </div>
    </Fragment>
  );
};

export default orderSummary;
