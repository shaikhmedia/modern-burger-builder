import React from "react";
import Styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  const ingList = Object.keys(props.Ing).map((cur) => {
    return (
      <li key={cur} className={Styles.Case}>
        {cur}: {props.Ing[cur]}
      </li>
    );
  });
  return props.show ? (
    <React.Fragment>
      <Backdrop hiden={props.hide} />
      <div className={Styles.Modal}>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        {ingList}
        <h4>Total Price: ${props.price.toFixed(2)}</h4>
        <p>Continue to checkout?</p>
      </div>
    </React.Fragment>
  ) : null;
};

export default modal;
