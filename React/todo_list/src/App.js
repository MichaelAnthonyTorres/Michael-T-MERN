import React, { useState } from "react";
import './App.css';

function App() {

  const [toDoList, setToDoList] = useState("");
  const[toDoArray, setToDoArray] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    const toDoItem = {
      text : toDoList,
      complete : false
    }
    
    setToDoArray([...toDoArray, toDoItem]);
    setToDoList("");
  }

  const deleteToDo = (id) =>  {
    const updateToDo = toDoArray.filter((toDoList, i) => i !== id);

    setToDoArray(updateToDo);
  }

  const completeToDo = (id) => {
    const updateToDo = toDoArray.map((toDoList, i) =>{ 
    if (i === id){
      toDoList.complete = !toDoList.complete
    }
    
    return toDoList
    })

    setToDoArray(updateToDo)
  }

  return(
  <div>
    <h1>To Do List</h1>
    
    <form onSubmit ={(e) => handleOnSubmit(e)}> 
      <input onChange = {(e) => setToDoList(e.target.value)} type = "text" value = {toDoList}/>
      {toDoList.length < 5 ? (
        <p>Must be more than 5 characters</p>
      ) : null }
      <button>Add Item</button>
    </form>

    <h2>Items</h2>

    {toDoArray.map((item, i) => (
      <ul>
        <li  key = {i} style = {{textDecoration: item.complete && 'line-through'}}>
          { item.text }
          <button onClick = {(e) => deleteToDo(i)} > Delete </button> 
          <input 
            onChange = {(e) => completeToDo(i)}
            checked = {item.complete}
            type="checkbox"
            /> 
        </li>
      </ul>
    ))}

  </div>

  )
}
export default App;