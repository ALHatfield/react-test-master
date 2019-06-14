import React, { Component } from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
import AddToCartBtn from '../components/AddToCartBtn';


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

    console.log("after" + JSON.stringify(currentItem))

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
        <div className="product-container container">
          <div className="row">
            <div className="panel border-right-grey col-centered col-12 col-lg-6">

              <div className="product-panel">
                <a href="#"><span className="color-lg">&#8592;</span> <span className="color-dg">All products</span></a>
              </div>

              <ProductHeader 
                name={name} 
                awards={awards} 
                handleTextChange={this.handleTextChange} 
                descriptionActive={this.state.descriptionActive}
                detailActive={this.state.detailActive}
              />

              <div className="border-bottom-grey product-panel">
                <div className="product-text">
                  {
                    this.state.text === 'description'
                      ? this.renderDescription()
                      : this.renderDetails()
                  }
                </div>
                <div className="product-price">
                    <span className="discount-price">${discountPrice}</span>
                    <span className="retail-price">${retailPrice}</span>
                </div>

                <div>Colors</div>

                
                <div className="dropdown show">
                  <a className="color-options-dropdown btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.color}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {this.props.product.images.map((option) => {
                      return (
                        <a 
                          className="dropdown-item" 
                          href="#"
                          key={option.color}
                          onClick={() => this.handleColorOptionChange(option.color)}
                        >
                          {option.color}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>


              <div className="product-cart-block">
                <AddToCartBtn 
                  inCart={this.state.inCart} 
                  cartText={this.state.cartText} 
                  addToCart={this.addToCart} 
                />
              </div>
            </div>     

            <div className="panel col-centered col-12 col-lg-6">
                <ProductImage image={this.state.src} name={name} />                        
            </div>

          </div>
        </div>
      );
  }
}

export default Product;