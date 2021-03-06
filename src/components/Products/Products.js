import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    console.log(props)
    const {img, name,seller,price,stock,} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-title'>
                <h4 className='product-name'>{name}</h4>
                <br/>
                 <p><small>by: {seller}</small></p>
                 <p>${price}</p> 
                 <p><small>Only {stock} left in stock - order soon</small></p>
                 <button onClick={() => props.handleAddProduct(props.product)} className='cart-btn'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Products;