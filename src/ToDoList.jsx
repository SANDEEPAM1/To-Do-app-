import { ToDoItem } from "./ToDoItem";

export function ToDoList ({todoes,togleTodo,deleteTodo}){
return(
    <ul className='list'>
          {todoes.length === 0 && "No todoess"}
          {todoes.map((todo)=>
          <ToDoItem {...todo} key={todo.id} togleTodo={togleTodo} deleteTodo={deleteTodo}/>
          )}
        </ul>
)
}