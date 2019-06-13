import React from 'react';

export default function ProductHeader(props) { 
    return (
        <div>
            <h1>{props.name}</h1>
            <div>{props.awards}</div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <div onClick={() => props.handleTextChange("description")}>
                        DESCRIPTION
                    </div>
                </li>
                <li className="nav-item">
                    <div onClick={() => props.handleTextChange("details")}>
                        DETAILS
                    </div>
                </li>
            </ul>
        </div>
    );
}