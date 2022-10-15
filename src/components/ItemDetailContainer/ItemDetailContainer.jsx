import React, { useState, useEffect } from "react";

import { getUnCurso } from "../../mockAPI/mockAPI";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [curso, setCurso] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  useEffect(() => {
    getUnCurso(itemID)
      .then((data) => {
        setCurso(data);
      })
      .catch((error) => {
        setFeedbackMsg(error.message);
      });
  }, [itemID]);

  // 2. Render condicional con Operador Ternario
  return (
    <FlexWrapper>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <CardDetail curso={curso} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
