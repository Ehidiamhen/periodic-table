import React from "react";
import data from "./PeriodicTableJSON.json"

export default function ElementModal() {
    return (
        <div className="element-modal">{data.elements.map(element => <div key={element.name}>{element.summary}</div>)}</div>
    )
}