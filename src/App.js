
import './App.css';
import Shop from './components/Shop/Shop'

function App() {
  return(
    <div>
  <Shop></Shop>

    </div>
  )
}

  
  
/* import React, { useEffect, useState } from 'react';

const Phones = () => {
    const[phones, setPhones] = useState([])
    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    } ,[])
    
    return (
        <div>
            {
                phones.map(phone => <Phone key ={phone.id} phone = {phone}></Phone>)
                   
                
            }
        </div>
    );
};

export default Phones;


 */



/* import React from 'react';

const Phone = (props) => {
    const { picture,  name, price, id} = props.phone
    return (
        <div>
            <img src={picture} alt="" />
            <h2>Name:{name}</h2>
            <p>Price:${price}</p>
            <p><small>ID:{id}</small></p>
        </div>
    );
};

export default Phone;




 */



// *********/////////  multiLine comment = alt + shift + a  ************///////////



export default App;
