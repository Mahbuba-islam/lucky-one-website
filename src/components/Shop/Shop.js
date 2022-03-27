import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const [products , setProducts] = useState([])
   useEffect( () =>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setProducts(data))
   }, [])
    return (
        <div className='shop-section'>
            <div className="phones-container">
         {
             products.map(product => <Product key = {product.id}
             product = {product}>

             </Product>)
         }
            </div>
            <div className="cart-container">
         <h2>this is cart</h2>
            </div>
        </div>
    );
};

export default Shop;