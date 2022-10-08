import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CardDetail({ curso }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);
  //1. Crear una función de "compra"
  //2. Debe guardar el valor de la cantidad en un estado
  function handleAddToCart(count) {
    addToCart(curso, count);
    setCount(count);
  }

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
          <a href="/cart">Ver el carrito</a>
        )}
        {/* 3. Pasar la función como evento al Item COunt */}
        <button onClick={()=> removeItem(curso.id)}>Eliminar</button>
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;
