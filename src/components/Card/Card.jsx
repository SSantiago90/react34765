import Button from "../Button/Button";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4>$ {props.price}</h4>
      </div>

      <Button otraprop="otraprop">{`Apredende ${props.title}`}</Button>
    </div>
  );
}
