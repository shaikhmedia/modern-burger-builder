import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../Button/Button";
import Styles from "./SummaryPage.module.css";

const summaryPage = (props) => {
  let disabled = false;

  // Covert ingredients object to array and loop through to get the total amount of ingredients
  const totalIng = Object.entries(props.ingredients)
    .map((el) => el[1])
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  // If total ingredient is 0 then disable the continue button
  if (totalIng === 0) {
    disabled = true;
  }
  return (
    <div className={Styles.SummaryPage}>
      <h2>Hope you enjoy your burger!</h2>

      <Burger ingredients={props.ingredients} />

      <div style={{ paddingBottom: "20px" }}>
        <Button clicked={props.checkoutCancelled} btnType="Danger">
          CANCEL
        </Button>

        <Button
          disabled={disabled}
          clicked={props.checkoutContinued}
          btnType="Success"
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default summaryPage;
