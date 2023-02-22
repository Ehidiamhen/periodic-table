import React from "react";
import data from "./PeriodicTableJSON.json"

export default function PeriodicTable() {
    return (
        <div className="periodic-table">{data.elements.map(element => <div key={element.name}>{element.symbol}</div>)}</div>
    )
}