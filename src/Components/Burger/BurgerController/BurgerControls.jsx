import React from "react";
import BurgerControl from "../BurgerController/BurgerControl/BurgerControl";
import Style from "../BurgerController/BurgerControl/BurgerControl.module.css";

const burgerControls = (props) => {
  return (
    <div className={Style.Control}>
      <p>
        <strong>Total Price:</strong> ${props.price.toFixed(2)}
      </p>
      <BurgerControl
        ing={props.ingredients}
        disabled={props.disableInfo}
        removeIng={props.removeIngredient}
        addIng={props.addIngredient}
      />
      <button
        onClick={props.showModal}
        className={`${Style.Order} ${Style.Button}`}
      >
        Order Now
      </button>
    </div>
  );
};

export default burgerControls;
