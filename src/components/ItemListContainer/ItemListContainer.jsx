import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemlistcontainer.css";

function ItemListContainer(props) {
  return (
    <div className="container">
      <h1>Titulo</h1>
      <FlexWrapper>
        <Card
          img="https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png"
          title="UX/UI"
          detail="Lorem Ipsum"
          price="85"
        />
        <Card
          img="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
          title="React"
          detail="Lorem Ipsum"
          price="75"
        />
        <Card
          img="https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg"
          title="Javascript"
          detail="Aprende Javascript desde cero!"
          price="59"
        />
        <Card
          img="https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png"
          title="UX/UI"
          detail="Lorem Ipsum"
          price="85"
        />
        <Card
          img="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
          title="React"
          detail="Lorem Ipsum"
          price="75"
        />
        <Card
          img="https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg"
          title="Javascript"
          detail="Aprende Javascript desde cero!"
          price="59"
        />
      </FlexWrapper>
    </div>
  );
}

export default ItemListContainer;
