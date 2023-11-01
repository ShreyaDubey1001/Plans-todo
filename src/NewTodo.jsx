 import { useState } from "react";
 import "../src/styles.css";
 


 export function NewTodo({add}){
    const [newItem,setNewItem]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(newItem === "")return
          add(newItem)
        setNewItem("");
        e.target.reset();
      }
    function addInput(e){
        e.preventDefault();
        setNewItem(e.target.value)
    }

     return (
        <form onSubmit={handleSubmit} className="new-item-form">
         <div className="form-row">
         <label className="add">Add new todo:</label>
         <input type="text" val={newItem} onChange={addInput} className="addinput" placeholder="add todo">
         </input>
         <button  className="button">+</button>
         
         </div>
       </form>
     )
 }