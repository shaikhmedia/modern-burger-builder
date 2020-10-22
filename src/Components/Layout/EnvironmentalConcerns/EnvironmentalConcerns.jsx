import React from "react";
import Styles from "./EnvironmentalConcerns.module.css";

const environmentalConcern = () => {
  return (
    <div className={Styles.EnvironmentalConcerns}>
      <ul>
        <li>✅ All the ingredients used in this burger are 100% organic</li>
        <li>✅ No artificial food color is used</li>
      </ul>
    </div>
  );
};

export default environmentalConcern;
