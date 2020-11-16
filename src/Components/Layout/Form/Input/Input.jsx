import React from "react";

const input = () => {
  return (
    <div style={{ display: "inline", fontSize: "13px" }}>
      <input type="radio" name="deliveryMethod" id="fastest" value="Fastest" />
      <label for="fastest">Fastest</label>
      <input
        type="radio"
        name="deliveryMethod"
        id="cheapest"
        value="Cheapest"
      />
      <label for="cheapest">Cheapest</label>
    </div>
  );
};

export default input;
