import React from "react";
import "./ElementModal.css";
import { colorMap } from "../PeriodicTable/PeriodicTable";

export default function ElementModal({ element, onClose }) {
  return (
    <div className="modal-wrap">
      <div
        style={{ backgroundColor: colorMap[element.category] }}
        className="element-modal"
      >
        <strong>{element.name}</strong>
        <span className="modal-close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            width="36px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

        <p>
          <span>Atomic Number: </span>
          {element.number}
        </p>
        <p>
          <span>Atomic Mass: </span>
          {element.atomic_mass}
        </p>
        <p>
          <span>Phase of Matter: </span>
          {element.phase}
        </p>
        <p>
          <span>Summary: </span>
          {element.summary}
        </p>
        <p>
          <span>Symbol: </span>
          {element.symbol}
        </p>
        <p>
          <span>Electronic Configuration: </span>
          {element.electron_configuration}
        </p>
        <p className="block">
          <span>Block: </span>
          {element.block}
        </p>
        <p>
          <span>More Info: </span>
          <a href={element.source} target="_blank">
            {element.source}
          </a>
        </p>
      </div>
    </div>
  );
}
