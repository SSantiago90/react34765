import "./button.css";
import { useState } from "react";

export default function Button(props) {
  const [colorBtn, setColorBtn] = useState({
    backgroundColor: props.color,
  });

  function handleClick() {
    if (props.onClick) props.onClick();
    //setColorBtn({ backgroundColor: "rgb(255, 50, 50)" });
  }

  return (
    <button onClick={handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  );
}
