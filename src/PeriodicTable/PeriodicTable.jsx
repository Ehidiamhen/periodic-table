import React, { useState } from "react";
import data from "../PeriodicTableJSON.json";
import "./PeriodicTable.css";
import ElementModal from "../ElementModal/ElementModal";

export const colorMap = {
  "noble gas": "#9328fe",
  "unknown, predicted to be noble gas": "#9328fe",
  "alkaline earth metal": "#ffa589",
  "diatomic nonmetal": "#487bde",
  "polyatomic nonmetal": "#2d6e96",
  "alkali metal": "#ff4343",
  "unknown, but predicted to be an alkali metal": "#ff4343",
  "transition metal": "#ff8a00",
  "unknown, probably transition metal": "#ff8a00",
  "post-transition metal": "#31b870",
  "unknown, probably post-transition metal": "#31b870",
  lanthanide: "#699797",
  actinide: "#976995",
  metalloid: "#1b99c1",
  "unknown, probably metalloid": "#1b99c1",
};

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(null);

  function handleClick(element) {
    setSelectedElement(element);
  }

  function closeModal() {
    setSelectedElement(null);
  }

  return (
    <div className="periodic-chart">
      <div className="periodic-table">
        {data.elements.map((element) => (
          <div
            className={`elements ${element.name}`}
            key={element.name}
            style={{
              gridColumn: element.xpos,
              gridRow: element.ypos,
              borderColor: colorMap[element.category],
              backgroundColor: colorMap[element.category],
              cursor: "pointer",
            }}
            onClick={() => handleClick(element)}
          >
            <strong className="symbol">{element.symbol}</strong>
            <small className="number">{element.number}</small>
            <small className="name">{element.name}</small>
          </div>
        ))}
      </div>
      {selectedElement && (
        <ElementModal element={selectedElement} onClose={closeModal} />
      )}
    </div>
  );
}
