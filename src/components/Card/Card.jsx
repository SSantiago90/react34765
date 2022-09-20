import Button from "../Button/Button";
import "./card.css";

export default function Card(props) {
  // estilos

  const cardStyles = {
    margin: "10px 15px",
    minHeight: "420px",
    width: "280px",
    height: "100%",
    borderRadius: "4px",
    "box-shadow": "0px 0px 4px rgba(0,0,0,0.50)",
    "background-color": props.expired ? "#555" : "#fff",
    overflow: "hidden",
    transition: "all 0.20s ease-in",
    cursor: "pointer",
  };

  const priceStyle = {
    color: props.offer === true ? "green" : "black",
  };

  return (
    <div style={cardStyles}>
      <div className="card-img">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 style={priceStyle}>
          {props.offer ? <p>Oferta!</p> : <></>}$ {props.price}
        </h4>
      </div>

      <Button>{`Apredende ${props.title}`}</Button>
    </div>
  );
}
