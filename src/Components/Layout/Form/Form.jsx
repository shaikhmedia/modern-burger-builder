import React from "react";
import Button from "../Button/Button";
import Styles from "./Form.module.css";

const form = (props) => {
  return (
    <form onSubmit={props.submitted} className={Styles.Form}>
      <input
        type="text"
        name="name"
        value={props.name}
        onChange={props.changed}
        placeholder="Your name"
        required
      />
      <input
        type="text"
        name="email"
        value={props.email}
        onChange={props.changed}
        placeholder="Your email"
        required
      />
      <input
        type="text"
        name="street"
        placeholder="Street Addres"
        value={props.street}
        onChange={props.changed}
        required
      />
      <input
        type="number"
        name="postCode"
        value={props.postCode}
        onChange={props.changed}
        placeholder="Post code"
        required
      />

      <Button clicked={props.handleOrderSubmit} btnType="Success">
        ORDER NOW
      </Button>
    </form>
  );
};

export default form;
