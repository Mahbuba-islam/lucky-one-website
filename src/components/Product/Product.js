import React from 'react';
import './Product.css'

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
        <button className='btn-cart'>add</button>
        </div>
    );
};

export default Product;