import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Styles from "../Burger/Burger.module.css";

const burger = (props) => {
  // Convert ingredients object to array
  const ingArray = Object.entries(props.ingredients);

  // Loop through the array
  let updatedIngredients = ingArray.map((el) => {
    // Construct and return a new array with value and map through it
    return [...Array(el[1])].map((cur, i) => {
      // Return Ingredients component for each value and it's name
      return <Ingredients key={el[0] + i} type={el[0]} />;
    });
  });

  // Find the total number of ingredients
  const totalIngAmount = ingArray
    .map((ing) => ing[1])
    .reduce((acc, cur) => {
      return cur + acc;
    }, 0);

  // Set paragraph if there is no ingredients
  if (totalIngAmount === 0) {
    updatedIngredients = <p className={Styles.Ing}>Please add ingredients</p>;
  }

  return (
    <div className={Styles.Burger}>
      <Ingredients type="bread-top" />
      {updatedIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default burger;
