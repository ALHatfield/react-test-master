import React from 'react';

export default function ProductHeader(props) { 
    return (
        <div>
            <div className="product-title">
                <h1>{props.name}</h1>
                <div>{props.awards}</div>
            </div>

            <div className="product-nav">
                <span onClick={() => props.handleTextChange("description")}>
                    DESCRIPTION
                </span>
                <span onClick={() => props.handleTextChange("details")}>
                    DETAILS
                </span>
            </div>    
        </div>
    );
}