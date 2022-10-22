import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import UserForm from "../UserForm/UserForm";

function CartView() {
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);

  return (
    <FlexWrapper>
      {cart.map((curso) => (
        <div key={curso.id}>
          <h2>{curso.title}</h2>
          <h4>${curso.price}</h4>
          <h4>{curso.count}</h4>
          <h4>Precio Total: ${curso.price * curso.count}</h4>
          <button>X</button>
        </div>
      ))}

      <UserForm cart={cart} getTotalPrice={getTotalPrice} />
    </FlexWrapper>
  );
}

export default CartView;
