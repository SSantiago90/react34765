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
          detail="Aprende Diseño UX/UI desde cero!"
          price={65}
          expired={true}
        />
        <Card
          img="https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg"
          title="Javascript"
          detail="Aprende Javascript desde cero!"
          price="59"
        />
        <Card
          img="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
          title="React"
          detail="Aprende React desde cero!"
          price="75"
          offer={true}
        />
        <Card
          img="https://www.atsistemas.com/dam/jcr:20b575da-1767-43dc-b18f-4f2a9f722877/1375-775-tailwind-css.png"
          title="Tailwind"
          detail="Aprende Javascript desde cero!"
          price="35"
        />
        <Card
          img="https://noviello.it/content/images/2020/05/nextjs.jpg"
          title="NextJS"
          detail="Aprende Javascript desde cero!"
          price="40"
        />
        <Card
          img="https://miro.medium.com/max/850/0*BRrBBgjCGAzRniV8.jpg"
          title="VueJS"
          detail="Aprende VueJS desde cero!"
          price="70"
        />
      </FlexWrapper>
    </div>
  );
}

export default ItemListContainer;
