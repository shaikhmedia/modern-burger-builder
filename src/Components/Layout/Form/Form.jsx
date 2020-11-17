import React from "react";
import Button from "../Button/Button";
import Styles from "./Form.module.css";
import Input from "../Form/Input/Input";

const form = (props) => {
  let disabled = false;

  // Convert customer object to array and set props to input component
  const inputFields = Object.entries(props.customerData).map((data) => {
    // Set disabled true if input value is empty
    if (data[1] === "") {
      disabled = true;
    }

    return (
      <Input
        changed={props.changed}
        key={data[0]}
        name={data[0]}
        value={data[1]}
      />
    );
  });

  return (
    <form onSubmit={props.submitted} className={Styles.Form}>
      {/* Title */}
      <div className={Styles.Title}>
        <p>Enter your contact details</p>
      </div>
      {/* Input Fields */}
      {inputFields}

      {/* Order Now Button */}
      <Button
        disabled={disabled}
        clicked={props.handleOrderSubmit}
        btnType="Success"
      >
        ORDER NOW
      </Button>
    </form>
  );
};

export default form;
