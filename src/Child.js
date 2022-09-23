import React from "react";
import { getRandomColor } from "./randomColorGenerator";

function Child({ onChangeColor }) {
  console.log(onChangeColor);

  return <div
  className="child"
  onChange={getRandomColor}
  style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
