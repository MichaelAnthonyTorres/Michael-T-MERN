import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const NewAuthor = (props)=>{


    const [errors, setErrors] = useState({});
    const [newAuthor, setNewAuthor] = useState({});



    const onChangeHandler = (e) =>{
        let newStateObject = {...newAuthor};
        newStateObject[e.target.name] = e.target.value;
        setNewAuthor(newStateObject);
    }

    const newSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`,
        newAuthor
        )
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })     
    }


    return(
        <div>
            
            <form onSubmit={newSubmitHandler}>
                <label>Name:</label>
                <input 
                onChange={onChangeHandler} 
                name="name" 
                value={newAuthor.name}/>
                {
                    errors.name?
                    <span>{errors.name.message}</span>
                    :null
                }
                <button>Submit</button>
                <button onClick={(e)=>navigate("/")}>Cancel</button>
            </form>

        </div>
    )
}


export default NewAuthor;