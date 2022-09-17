import "./button.css";

function Button(props) {
  console.log(props.otraprop);
  return <button className="btn">{props.children}</button>;
}

export default Button;
