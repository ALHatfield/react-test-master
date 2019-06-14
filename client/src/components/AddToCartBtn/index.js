import React from 'react';

export default function AddToCartBtn (props) {

    
    return(
        <div className="product-panel">
            <button 
                className="cart-btn btn btn-primary"
                onClick={() => props.addToCart()}>
                {props.cartText}
            </button>
            <span>
                {
                props.inCart
                    ? <span className="alert alert-success">"Item added to cart!"</span>
                    : ""
                }
            </span>
        </div>
    )
}