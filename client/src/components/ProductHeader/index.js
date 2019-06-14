import React from 'react';

export default function ProductHeader(props) { 
    return (
        <div className="under-construction product-panel">
            <div className="product-title">
                <h1>{props.name}</h1>
                <div className="product-title-award-text">{props.awards}</div>
            </div>
            <ul className="nav nav-tabs">
                <li className="product-nav-item nav-item active">
                    <div onClick={() => props.handleTextChange("description")}>
                        DESCRIPTION
                    </div>
                </li>
                <li className="product-nav-item nav-item">
                    <div onClick={() => props.handleTextChange("details")}>
                        DETAILS
                    </div>
                </li>
            </ul>
        </div>
    );
}