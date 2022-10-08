import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);

  return (
    <a href="/cart">
      <span> X </span>
      <span>{getTotalItemCount()}</span>
    </a>
  );
}

export default CartWidget;
