import React from 'react';

export default function ProductDescription(props) {
    const { description } = props;
    return (
        <div>
            {description}
        </div>
    );
}