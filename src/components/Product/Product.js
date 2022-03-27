import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Product.css'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
   const {name , img, price , id} = props.product
  
    return (
        <div className="product">
            <div className='product-info'>
            <img src= {img} alt="" />
            <h2>name:{name}</h2>
            <h4>price:${price}</h4>
            <h5>id:{id}</h5>
        </div>
        <button onClick={() => props.handleClick(props.product)} className='btn-cart'><p className='btn-info'>Add to cart</p>
        <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
        </button>
       
        </div>
    );
};

export default Product;