import React, { useState, useEffect } from "react";

import { getUnCurso } from "../../mockAPI/mockAPI";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

// 6. Leer los parámetros de la URL
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [curso, setCurso] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getUnCurso(itemID).then((data) => {
      setCurso(data);
    });
  }, [itemID]);

  return (
    <FlexWrapper>
      <CardDetail
        title={curso.title}
        img={curso.img}
        price={curso.price}
        detail={curso.detail}
        stock={curso.stock}
        expired={curso.expires}
      />
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
