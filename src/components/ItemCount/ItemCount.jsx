import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

export default function ItemCount({ stock, initial, text }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div>
      <h2>Realiza tu compra</h2>
      <FlexWrapper>
        <button onClick={handleSubstract}>-</button>
        <strong>{count}</strong>
        <button onClick={handleAdd}>+</button>
      </FlexWrapper>
      <button>{text}</button>
    </div>
  );
}
