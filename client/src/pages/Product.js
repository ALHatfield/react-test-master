import React, { Component } from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';

class Product extends Component {
  state = {
    src: "",
    color: "",
    text: "",
    cartText: "Add to Cart",
    inCart: false
  }

  componentDidMount() {
    this.setState({
      src: this.props.product.images[0].src,
      color: this.props.product.images[0].color,
      text: "description"
    })
  }

  handleTextChange = text => {
    this.setState({
      text: text
    })
  }

  renderDescription = () => {
    return(
      <div>{this.props.product.description}</div>
    )
  } 
  
  renderDetails = () => {
    return(
      <div>{this.props.product.details}</div>
    )
  }

  handleColorOptionChange = (color) => {
    const currentItem = this.props.product.images.find(image => {
      return image.color === this.state.color
    });

    this.setState({
      color: color,
      src: currentItem.src
    })        
  }

  addToCart = () => {
    if(!this.state.inCart) {
      this.setState({
        cartText: "Loading..."
      })
      setTimeout(() => {
        this.setState({
          cartText: "View Cart",
          inCart: true
        })
      }, 2000)
    }
  }
  
  render() {
    const { name, awards, images, discountPrice, retailPrice, colors } = this.props.product;
    return (    
      <div className="container product-container">
          <div className="row">
            <div className="col-12 col-md-6 product-panel">
              <div className="product-header under-construction">
                <ProductHeader
                  name={name} 
                  awards={awards} 
                  handleTextChange={this.handleTextChange} 
                />
              </div>            
              <div className="product-summary under-construction">
                {
                  this.state.text === 'description'
                    ? this.renderDescription()
                    : this.renderDetails()
                }
                <div>
                  <span>{discountPrice}</span>
                  <span>{retailPrice}</span>
                </div>

                <div>Colors</div>
              
                <div className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.color}
                  </a>
  
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                      this.props.product.images.map((option) => {
                        return(
                          <a 
                            className="dropdown-item" 
                            href="#"
                            key={option.color}
                            onClick={() => this.handleColorOptionChange(option.color)}
                          >
                            {option.color}
                          </a>
                        )   
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="add-to-cart-block under-construction">
                <button 
                  className="btn"
                  onClick={() => this.addToCart()}>
                  {this.state.cartText}
                </button>
                <span>
                  {
                    this.state.inCart
                      ? "Item added to cart!"
                      : ""
                  }
                </span>
              </div>
            </div>     

            <div className="col-12 col-md-6 product-panel">
              <div className="product-showcase under-construction">
                <ProductImage image={this.state.src} name={name} />                        
              </div>
            </div>

          </div>
      </div>
    );
  }
}

export default Product;