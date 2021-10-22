import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const List = (props) => {
    const {hasBeenSubmitted, setHasBeenSubmitted} = props;
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

    const deleteOneProduct =(id) =>{
        axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log("deletion successful");
            setHasBeenSubmitted(!hasBeenSubmitted)
        })
        .catch(console.log("error deleting product"))
    }

    return(
    <>
        <h2>Product Info</h2>
        {product.map((products, index) =>(
            <div  key={index}>
            <Link to={`${products._id}`}>{products.title}</Link>
            <Link to={`edit/${products._id}`}> EDIT </Link>
            <button onClick={(e)=> deleteOneProduct(products._id)}>Delete</button>
            </div>
        ))}
    </>
    );
}
 
export default List;