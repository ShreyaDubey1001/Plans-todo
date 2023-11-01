import "../src/styles.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function TodoItems({title,id,completed,toggleTodo,deleteTodo}){
    return(
        <li key={id}>
        <label className="item">
        <input type="checkbox" 
          checked={completed} 
          onChange={ e=> toggleTodo(id,e.target.checked)}
          className="checkbox"
        >
        </input>
          {title}
        </label>
        <IconButton aria-label="delete" color="error" size="small" onClick={() =>deleteTodo(id)}>
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        
     </li>
    );
}