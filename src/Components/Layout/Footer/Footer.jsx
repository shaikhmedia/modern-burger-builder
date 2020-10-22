import React from "react";
import Styles from "./Footer.module.css";

const footer = () => {
  return (
    <div className={Styles.Footer}>
      &copy; Alamin Shaikh 2020
      <ul>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">About US</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Order Now</a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
