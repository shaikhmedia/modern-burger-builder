import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import Styles from "../Burger/Burger.module.css";

const burger = (props) => {
  let updatedIngredients = Object.keys(props.ingredients)
    .map((el) => {
      return [...Array(props.ingredients[el])].map((_, i) => {
        return <Ingredients key={el + i} type={el} />;
      });
    })
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);

  //console.log(updatedIngredients);

  if (updatedIngredients.length === 0) {
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
