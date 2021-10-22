import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';


const AllAuthors = (props)=>{
    const {id} = props;
    const [authorList, setAuthorList] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res.data);
                setAuthorList(authorList.filter((author)=>author._id !== id))
            })
            .catch((err)=>{
                console.log(err);
            })
    }



    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList?

                        authorList.map((author, index)=>(
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td><button onClick={()=>{navigate(`/edit/${author._id}`)}}>Edit</button>
                                <button onClick={(e)=>deleteHandler(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        :null
                    }
                </tbody>
            </table>
        </div>
    )
}


export default AllAuthors;