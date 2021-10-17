import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const List = (props) => {
    const {hasBeenSubmitted} = props;
    const [product, setProoduct] = useState([]);
    
    useEffect(() =>{
        axios
        .get("http://localhost:8000/api/products")
        .then(response =>{ 
            console.log(response.data)
            setProoduct(response.data)
        })
        .catch(err => console.log(err))
    }, [hasBeenSubmitted])

    return(
    <>
        <h2>Product Info</h2>
        {product.map((products, index) =>(
            <div  key={index}>
            <Link to={`${products._id}`}>{products.title}</Link>
            </div>
        ))}
    </>
    );
}
 
export default List;