import React from 'react';

export const ProductHeader = ({...props}) => ( 
    <div>
        <h1>{name}</h1>
        <div>{awards}</div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <div onClick={() => handleTextChange("description")}>
                    DESCRIPTION
                </div>
            </li>
            <li className="nav-item">
                <div onClick={() => handleTextChange("details")}>
                    DETAILS
                </div>
            </li>
        </ul>
    </div>
);