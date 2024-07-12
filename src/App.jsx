import React from "react";
import Todos from "./Todos/Todos";

const App = () =>{
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Explore advanced React topics', completed: false },
  ];


  

  return(
    <>
    <h1>Todo List:</h1>
    <ul>
  {todos.map((item)=>{
    return(
      <Todos key={item.id} text ={item.text} completed={item.completed}/>
    )
  })}
  </ul>
    </>
  )
}

export default App;