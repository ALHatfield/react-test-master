import React from 'react';
// import picture from '../../ath-msr7-black.jpg'

export default function ProductImage(props) {
    const { image, name } = props

    return (
        <div>
            <img style={{width: '500px'}} src={image} alt={name}/>
        </div>
    );
}
