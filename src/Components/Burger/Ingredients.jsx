import React from "react";
import Styles from "./Ingredients.module.css";

// Ingredients component
const ingredients = (props) => {
  let ingredients = null;

  // Style for each specific types
  switch (props.type) {
    case "bread-top":
      ingredients = (
        <div className={Styles.BreadTop}>
          <div className={Styles.Seeds1}></div>
          <div className={Styles.Seeds2}></div>
        </div>
      );
      break;
    case "bread-bottom":
      ingredients = <div className={Styles.BreadBottom}></div>;
      break;
    case "seeds1":
      ingredients = <div className={Styles.Seeds1}></div>;
      break;
    case "seeds2":
      ingredients = <div className={Styles.Seeds2}></div>;
      break;
    case "meat":
      ingredients = <div className={Styles.Meat}></div>;
      break;
    case "cheese":
      ingredients = <div className={Styles.Cheese}></div>;
      break;
    case "salad":
      ingredients = <div className={Styles.Salad}></div>;
      break;
    case "bacon":
      ingredients = <div className={Styles.Bacon}></div>;
      break;
    default:
      ingredients = null;
  }
  return ingredients;
};

export default ingredients;
