import React from 'react';

const Smartphone = (Props) => {
   const {picture} = Props.phone
    return (
        <div>
            <img src={picture} alt="" />


        </div>
    );
};

export default Smartphone;