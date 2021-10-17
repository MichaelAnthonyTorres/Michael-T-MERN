import React, { useState, useEffect } from 'react';
import axios from 'axios';


const OneProduct = (props) => {
    const {_id} = props;
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() =>{
        axios
        .get(`http://localhost:8000/api/products/${_id}`)
        .then((response) => {
            console.log(response.data);
            setSingleProduct(response.data);
            })
        .catch(err => console.log(err))
    }, [] ) 
    return (
        <div>
            <h2>Product: {singleProduct.title}</h2>
            <p>Price: {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
        </div>
    )
}
 
export default OneProduct;