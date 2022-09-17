import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemListContainer(props) {
  return (
    <>
      <h1>...</h1>
      <FlexWrapper>
        <Card
          img="https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png"
          title="UX/UI"
          detail="Lorem Ipsum"
          price="100"
        />
        <Card
          img="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
          title="React"
          detail="Lorem Ipsum"
          price="150"
        />
      </FlexWrapper>
    </>
  );
}

export default ItemListContainer;
