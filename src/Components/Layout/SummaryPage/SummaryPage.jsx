import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../Button/Button";
import Styles from "./SummaryPage.module.css";

const summaryPage = (props) => {
  return (
    <div className={Styles.SummaryPage}>
      <h2>Hope you enjoy your burger!</h2>

      <Burger ingredients={props.ingredients} />

      <div style={{ paddingBottom: "20px" }}>
        <Button clicked={props.checkoutCancelled} btnType="Danger">
          CANCEL
        </Button>

        <Button clicked={props.checkoutContinued} btnType="Success">
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default summaryPage;
