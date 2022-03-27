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

   const clickHandler = (product) => {
    console.log(product)
}
    return (
        <div className='shop-section'>
           
            <div className="phones-container">
         {
             products.map(product => <Product key = {product.id}
             product = {product}
             clickHandler = {clickHandler}>

             </Product>)
         }
            </div>
            <div className="cart-container">
         <h2>Selected Phone</h2>
         <button>Choose one for me</button>
         <button>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;