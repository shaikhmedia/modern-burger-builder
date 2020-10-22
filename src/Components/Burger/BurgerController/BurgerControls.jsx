import React from "react";
import BurgerControl from "../BurgerController/BurgerControl/BurgerControl";
import Style from "../BurgerController/BurgerControls.module.css";

const burgerControls = (props) => {
  return (
    <div className={Style.Controls}>
      <p>
        <strong>Total Price:</strong> ${props.price.toFixed(2)}
      </p>
      <BurgerControl
        ing={props.ingredients}
        disablStatus={props.ingDisable}
        removeIng={props.removeIngredient}
        addIng={props.addIngredient}
      />
      <button
        disabled={props.orderDisable}
        onClick={props.showModal}
        className={`${Style.Order} ${Style.Button}`}
      >
        Order Now
      </button>
    </div>
  );
};

export default burgerControls;
