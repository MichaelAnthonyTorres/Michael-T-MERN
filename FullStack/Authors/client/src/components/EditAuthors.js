import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';


const EditAuthor = (props)=>{

    const {id} = props;
    const [errors, setErrors] = useState({});
    const [updatingAuthor, setUpdatingAuthor] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log(res.data);
            setUpdatingAuthor(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [id])

    const onChangeHandler = (e) =>{
        let newStateObject = {...updatingAuthor};
        newStateObject[e.target.name] = e.target.value;
        setUpdatingAuthor(newStateObject);
    }

    const updateSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`,
        updatingAuthor
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
            <form onSubmit={updateSubmitHandler}>
                <label>Name:</label>
                <input 
                onChange={onChangeHandler} 
                name="name" 
                value={updatingAuthor.name}/>
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

export default EditAuthor;