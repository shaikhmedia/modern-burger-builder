import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../Button/Button";

const summaryPage = (props) => {
  return (
    <div>
      <h1>Hope you enjoy your burger!</h1>

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
