import React, { Fragment } from "react";
import Styles from "./Input.module.css";

const input = (props) => {
  let placeholder = "";
  let type = "text";
  let value = props.value;
  let validationText = "";
  let inputStyle = [Styles.Input];

  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = new RegExp(regexEmail);

  const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const validPass = new RegExp(regexPass);

  if (props.name === "email") {
    placeholder = "Email address";
    type = "email";

    if (value === "") {
      validationText = "";
    } else if (!value.match(validEmail)) {
      inputStyle.push(Styles.Invalid);
      validationText = "Please enter a valid email";
    }
  } else if (props.name === "name") {
    placeholder = "Full name";
    if (value === "") {
    }
  } else if (props.name === "street") {
    placeholder = "Street address";
  } else if (props.name === "ZIP") {
    placeholder = "ZIP Code";
    type = "number";
  } else if (props.name === "password") {
    placeholder = "Password";
    type = "password";
    if (value === "") {
      validationText = "";
    } else if (!value.match(validPass)) {
      inputStyle.push(Styles.Invalid);
      validationText = "Please enter a valid password";
    }
  }

  return (
    <div className={inputStyle.join(" ")}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        id={props.name}
        type={type}
        name={props.name}
        value={value}
        onChange={props.changed}
        placeholder={placeholder}
      />
      <small>{validationText}</small>
    </div>
  );
};

export default input;
