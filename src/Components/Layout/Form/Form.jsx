import React from "react";
import Button from "../Button/Button";
import Styles from "./Form.module.css";
import Input from "../Form/Input/Input";

const form = (props) => {
  const inputFields = Object.entries(props.customerData).map((data) => {
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
      <div className={Styles.Title}>
        <p>Enter your contact details</p>
      </div>

      {inputFields}

      <Button clicked={props.handleOrderSubmit} btnType="Success">
        ORDER NOW
      </Button>
    </form>
  );
};

export default form;
