import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

function CardDetail({ curso }) {
  return (
    <div className="detail-container">
      <FlexWrapper>
        <div className="main container">
          <h1>{curso.title}</h1>
          <img src={curso.img} alt={curso.title} />
          <h3>$ {curso.price}</h3>
        </div>
        <ItemCount stock={curso.stock} initial={1} text="Agregar al carrito" />
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;
