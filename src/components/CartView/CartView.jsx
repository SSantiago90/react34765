import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function CartView() {
  const { cart, removeItem } = useContext(cartContext);
  console.log(cart);

  return (
    <FlexWrapper>
      {cart.map((curso) => (
        <div>
          <h2>{curso.title}</h2>
          <h4>${curso.price}</h4>
          <h4>{curso.count}</h4>
          <h4>Precio Total: ${curso.price * curso.count}</h4>
          <button>X</button>
        </div>
      ))}
    </FlexWrapper>
  );
}

export default CartView;
