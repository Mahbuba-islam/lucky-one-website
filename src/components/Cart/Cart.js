import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
  console.log(cart)
    return (
        <div>
          
           <h3>{cart.name}</h3>
        </div>
    );
};

export default Cart;