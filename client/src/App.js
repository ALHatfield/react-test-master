import React, { useState } from 'react';
import './App.css';
import ProductPage from './pages/Product';
import img1 from './ath-msr7-black.jpg';
import img2 from './ath-msr7-brown.jpg';


// use "use effect" for life cycle methods
const App = () => {
  const [product, setProduct] = useState({
    name: "the thing's name",
    awards: "all the awards",
    images: [
      {
        src: img1,
        color: "black"
      },
      {
        src: img2,
        color: "brown"
      }
    ],
    description: "this thing is great",
    details: "so many details",
    discountPrice: 59.99,
    retailPrice: 89.99,
  })
  return (
    <div className="App">
      <ProductPage product={product} setProduct={setProduct}/>
    </div>
  )
};


export default App;
