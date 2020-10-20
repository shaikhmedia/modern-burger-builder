import React from "react";
import Styles from "./BurgerControl.module.css";

// Burger controller
const burgerControl = (props) => {
  // Convert the ingredients object's keys to array and loop through to get the ingredient's name and value
  const control = Object.keys(props.ing).map((cur) => (
    <div key={cur} className={Styles.Controls}>
      <h3 className={Styles.IngName}>{cur}</h3>
      <button
        //Pass the type to add correct item to the burger
        onClick={() => props.addIng(cur)}
        className={`${Styles.Button} ${Styles.More}`}
      >
        Add
      </button>
      <button
        // Disable the button when there is no ingredient
        disabled={props.disabled[cur]}
        //Pass the type to remove correct item to the burger
        onClick={() => props.removeIng(cur)}
        className={`${Styles.Button} ${Styles.Less}`}
      >
        Remove
      </button>
    </div>
  ));
  // Return the JSX
  return control;
};

export default burgerControl;
