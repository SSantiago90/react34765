import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function CardDetail({ curso }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(curso, count);
    setCount(count);
  }

  // 1. IF con early return / return anticipado
  if (curso.title)
    return (
      <div className="cardDetail">
        <div className="cardDetail_img_detail">
          <img src={curso.img} alt={curso.title} />
        </div>
        <FlexWrapper>
          <div className="cardDetail_detail">
            <h2>{curso.title}</h2>
            <h4 className="cardDetail_muteD">{curso.category}</h4>
            <h3>$ {curso.price}</h3>
            <hr />
            <p>{curso.detail}</p>
          </div>
          {count === 0 ? (
            <ItemCount
              onAddToCart={handleAddToCart}
              text="Agregar al carrito"
              stock={curso.stock}
              initial={1}
            />
          ) : (
            <Link to="/cart">Ver el carrito</Link>
          )}

          <button onClick={() => removeItem(curso.id)}>Eliminar</button>
        </FlexWrapper>
      </div>
    );

  return <Loader />;
}

export default CardDetail;
