import React from 'react';
import ProductHeader from '../components/ProductInfo';
import ProductImage from '../components/ProductImage';
import AddToCartBtn from '../components/AddToCartBtn';



const Product =({
    product,
    setProduct  
  }) => (
    <div
      onClick={() => setProduct({
        ...product,
        name: "foo" 
      })}
    >
      {JSON.stringify(product)}
    </div>
  )

export default Product;
