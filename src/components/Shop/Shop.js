import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
   const [products , setProducts] = useState([])
   const [cart , setCart] = useState([])
  
   useEffect( () =>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setProducts(data))
   }, [])

   const handleClick = (product) => {
  const newCart = [...cart, product]
     setCart(newCart)
 }

   
    
    return (
        <div className='shop-section'>
           
            <div className="phones-container">
         {
             products.map(product => <Product key = {product.id}
             product = {product}
             handleClick = {handleClick}>

             </Product>)
         }
            </div>
            <div className="cart-container">
               <h2>Selected Phones</h2>
                {
                    cart.map(cart => <Cart 
           
                        cart = {cart}></Cart> )
                }
            
            </div>
        </div>
    );
};

export default Shop;