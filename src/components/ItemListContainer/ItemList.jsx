import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.coursesList.map((curso) => {
          return (
            <Card
              key={curso.id}
              id={curso.id}
              title={curso.title}
              img={curso.img}
              price={curso.price}
              detail={curso.detail}
              stock={curso.stock}
              expired={curso.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;
