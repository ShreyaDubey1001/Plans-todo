import { TodoItems } from "./TodoItems";
import "../src/styles.css"

export function TodoList({todos,toggleTodo,deleteTodo}){
     return(
      <>
      {todos.length === 0 && <p className="notodo">No todo</p>}
        <ul className="list">
        {todos.map(i =>{
           return (
              <TodoItems 
                {...i}
                key={i.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
           );
        })}
      </ul>
      </>
     );
}