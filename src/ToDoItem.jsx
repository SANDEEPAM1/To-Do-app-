export function ToDoItem ({id,completed,title,key,togleTodo,deleteTodo}){

    return(
        <li key={key} >
          <label>
            <input type="checkbox" checked = {completed} 
            onChange={(e)=>togleTodo(id, e.target.checked)}
            />
            {title}
            <button className='btn btn-danger' 
            onClick={ ()=>deleteTodo(id)}
            >Delete</button>
          </label>
              
        </li>
    )
}