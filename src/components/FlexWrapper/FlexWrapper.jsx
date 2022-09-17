import React from "react";
import "./flexwrapper.css";

function FlexWrapper(props) {
  return (
    <div>
      <h1>Listado de nuestros cursos</h1>
      <div className="flex">{props.children}</div>
    </div>
  );
}

export default FlexWrapper;
