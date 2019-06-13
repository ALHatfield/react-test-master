import React, { Component } from 'react';
import ProductHeader from '../components/ProductHeader';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';

class Product extends Component {
    state = {
        src: "",
        color: "",
        text: ""
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
        let currentItem = this.props.product.images.find(image => {
             return image.color === this.state.color
        });

        this.setState({
            color: color,
            src: currentItem.src
        })

        console.log(this.state);
        
    }
    


    
    render() {
        const { name, awards, images, discountPrice, retailPrice, colors } = this.props.product;
        return (    
            <div className="container">
                <div className="row">
                
                    <div className="col-12 col-md-6">
                        <ProductHeader name={name} awards={awards} handleTextChange={this.handleTextChange} />
                        
                        {
                            this.state.text === 'description'
                                ? this.renderDescription()
                                : this.renderDetails()
                        }


                        <div>
                            <span>{discountPrice}</span><span>{retailPrice}</span>
                        </div>


                        <div>Colors</div>
                        
                        <div className="dropdown show">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.color}
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                {this.props.product.images.map((option) => {
                                    return  <a className="dropdown-item" 
                                               href="#"
                                               key={option.color}
                                               onClick={() => this.handleColorOptionChange(option.color)}>
                                               {option.color}
                                            </a>
                                })}
                            </div>
                        </div>



                    </div>
                        
        


                    <div className="col-12 col-md-6">
                        <ProductImage image={this.state.src} name={name} />                        
                    </div>




                </div>
            </div>
        );
    }
}

export default Product;