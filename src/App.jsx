
import { useEffect, useState } from 'react';
import "../src/styles.css"
import { NewTodo } from './NewTodo';
import { TodoList } from './TodoList';
import { Footer } from './Footer';

function App() {
 
  const [todos,setTodos]=useState(()=>{
     const localValue=localStorage.getItem("ITEMS")
     if(localValue==null)return []
     return JSON.parse(localValue)
  });
  
  useEffect(()=>{
     localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])
  function addTodos(title){
    setTodos(prevVal =>{
      return [
        ...prevVal,
        {id:crypto.randomUUID(),title,completed:false}
      ]
      
  })
  }
  
  function toggleTodo(id,completed){
       setTodos(i =>{
         return i.map(todo =>{
             if(todo.id === id){
               return {...todo,completed}
             }
             return todo
         })
       })
  }


  function deleteTodo(id){
      setTodos(i =>{
          return i.filter(todo =>todo.id!== id)
      })
  }
  return (
    <>
      <div className="container">
      <h1 >ToDo List</h1>
        <NewTodo add={addTodos}/>
       <div className="wrapper">
       <h2 >Your Plans:</h2>
        <TodoList 
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        </div>
        </div>
        
        <Footer />
    </>
  );
}

export default App;
