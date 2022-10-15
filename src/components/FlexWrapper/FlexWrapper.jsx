import React from "react";
import "./flexwrapper.css";

function FlexWrapper(props) {
  const classnameDiv =
    props.rows === true ? "flexWrapper flex_rows" : "flexWrapper flex_cols";

  return <div className={classnameDiv}>{props.children}</div>;
}

export default FlexWrapper;
