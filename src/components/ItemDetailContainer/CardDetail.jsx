import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

function CardDetail({ curso }) {
  const [count, setCount] = useState(0);

  //1. Crear una función de "compra"
  //2. Debe guardar el valor de la cantidad en un estado
  function handleAddToCart(count) {
    console.log("Agregaste items al carrito:", curso, count);
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
            stock={curso.stock}
            initial={1}
            text="Agregar al carrito"
          />
        ) : (
          <a href="/cart">Ver el carrito</a>
        )}
        {/* 3. Pasar la función como evento al Item COunt */}
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;
