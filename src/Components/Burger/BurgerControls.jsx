import React from "react";
import BurgerControl from "./BurgerControl";
import Style from "./BurgerControl.module.css";

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
      <button className={`${Style.Order} ${Style.Button}`}>Order Now</button>
    </div>
  );
};

export default burgerControls;
