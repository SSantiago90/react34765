import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);

  // 3. Operador AND &&

  return (
    <a href="/cart">
      <span> 🛒 </span>
      <span>{getTotalItemCount() > 0 && getTotalItemCount()}</span>
    </a>
  );
}

export default CartWidget;
