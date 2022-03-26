import React, { useEffect, useState } from 'react';
import Smartphone from '../Smartphone/Smartphone';
import './Smartphones.css'

const Smartphones = () => {
   const [phones, setPhones] = useState([])
   useEffect( ()=>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setPhones (data))
   },[])
    return (
        <div className='shop-container'>
            <div className="phones-container">
                {
                    phones.map(phone => <Smartphone key = {phone.id}> phone={phone}</Smartphone>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary </h4>
            </div>
        </div>
    );
};

export default Smartphones;