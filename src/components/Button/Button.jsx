import "./button.css";
import { useState, useEffect } from "react";

export default function Button(props) {
  const [colorBtn, setColorBtn] = useState({
    backgroundColor: props.color,
  });

  console.log("%cRender del componente", "color: green");

  useEffect(() => {
    console.log("Montaje del componente");
  }, []);

  useEffect(() => {
    console.log("%cRender/update del estado", "color:pink");
  }, [colorBtn]);

  function handleClick() {
    setColorBtn({ backgroundColor: "rgb(255, 50, 50)" });
    // 🛑 colorBtn = { backgroundColor: "rgb(157, 150, 00)"}
  }

  return (
    <button onClick={handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  );
}

export function ButtonB() {
  return <button>Click</button>;
}
