import React from "react";
import { ThreeBody } from "@uiball/loaders";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function Loader() {
  return (
    <FlexWrapper>
      <ThreeBody size={82} speed={1.1} color="#444444" />
    </FlexWrapper>
  );
}

export default Loader;
