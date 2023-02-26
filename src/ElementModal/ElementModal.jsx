import React from "react";
import './ElementModal.css'

export default function ElementModal({element, onClose}) {
    return (
        <div className="modal-wrap">
                <div className="element-modal">
                    <span onClick={onClose}>X</span>
                    <strong>{element.name}</strong>
                    <p>{element.summary}</p>
                    <p>{element.number}</p>
                </div>
            </div>
    )
}