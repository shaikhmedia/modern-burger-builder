import React from "react";
import Styles from "./BurgerControl.module.css";

// Burger controller
const burgerControl = (props) => {
  // Convert the ingredients object's keys to array and loop through to get the ingredient's name and value
  const control = Object.keys(props.ing).map((cur) => (
    <div key={cur} className={Styles.Controls}>
      <h3 className={Styles.IngName}>{cur}</h3>
      <button
        //Pass the type to add and remove item handler
        onClick={() => props.addIng(cur)}
        className={`${Styles.Button} ${Styles.More}`}
      >
        More
      </button>
      <button
        disabled={props.disabled[cur]}
        onClick={() => props.removeIng(cur)}
        className={`${Styles.Button} ${Styles.Less}`}
      >
        Less
      </button>
    </div>
  ));
  // Return the JSX
  return control;
};

export default burgerControl;
