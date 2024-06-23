import { useEffect, useState } from 'react'
import './style.css'
import { NewTodoform } from './NewTodoForm';
import { ToDoList } from './ToDoList';

function App() {
  //useState
  const [newItem, setnewItem] = useState('');
  const [toDo,setToDo] = useState(()=>{
        const localValue = localStorage.getItem("Items");
          if(localValue === null){
          return [];
        }
         return JSON.parse(localValue);
      });

  useEffect(()=>{
    localStorage.setItem("Items",JSON.stringify(toDo))
  },[toDo])

  const togleTodo =(id,completed)=>{
    setToDo(currentTodos =>{
     return  currentTodos.map((todo)=>  {
          if(todo.id === id){
            return {...todo,completed}
          }
          return todo;
      })
    })
  }
 
  function addTodo(title){
      setToDo(currentTodos=> {return [...currentTodos , {id:crypto.randomUUID(),title:title,completed:false}]});
  }

  const deleteTodo = (id) =>{
    setToDo(currentTodos=> currentTodos.filter(todo => id !== todo.id))
 }

  return (
   <>
      <NewTodoform onSubmit={addTodo} newItem={newItem} setnewItem={setnewItem}/> 
      <h1 className='header'>To-Do-List</h1>
        <ToDoList todoes ={toDo} togleTodo={togleTodo} deleteTodo={deleteTodo} />
    
   </>
  )
}


export default App
