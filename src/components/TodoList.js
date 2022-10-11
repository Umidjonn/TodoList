import React from 'react';

const TodoList = ({todos, setTodos}) =>{

  const handleDelete = ({id})=>{
    setTodos(todos.filter((todos) => todos.id !== id))
  }
  return(
    <div>
      {todos.map((todos)=>(
        <li 
        className="list-item" 
        key={todos.id}>
        <input 
        type="text" 
        value={todos.title} 
        className="list" 
        onChange={(event) =>  event.preventDefault()}/> 
        <div>
          <button className='button-complete task-button' onClick={()=>handleDelete(todos)}>
            <i className='fa fa-check-circle'></i>🗑️</button>
        </div>

        </li>
      ))}
    </div>
  )
}

export default TodoList;