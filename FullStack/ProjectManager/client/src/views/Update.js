import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Update = (props) => {
    const {_id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(response =>{
            console.log(response.data);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
        })
        .catch(err => console.log(err))
    }, []);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const updateProduct = {
            title,
            price,
            description
        };
        axios
            .put(`http://localhost:8000/api/products/${_id}`, updateProduct)
            .then((response) => {
                console.log(response);
                navigate('/')
            })
            .catch((err) => console.log(err));
    }
    

    return ( 
        <form onSubmit={handleSubmit}>
        <h2>Product Form</h2>
        <div>
          Title:{" "}
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          Price:{" "}
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          Description:{" "}
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button 
        type="submit"
        >Submit</button>
      </form>
     );
}
 
export default Update;