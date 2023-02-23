import React from "react";
import data from "../PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "metalloid": "#73D2DE",
};

export default function PeriodicTable() {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <div
          className={`elements ${element.name}`}
          key={element.name}
          style={{ gridColumn: element.xpos, gridRow: element.ypos, borderColor: colorMap[element.category], }}
        >
          <strong className="symbol">{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      ))}
    </div>
  );
}
