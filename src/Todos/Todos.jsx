import React from "react";

const Todos = (props) =>{
  console.log(props);
  let value;
  if(props.completed){
     value = "line-through"
  }
  else{
    value = "none";
  }

  return(
    <li style={{textDecoration: `${value}`}}>{props.text}</li>
  );
}

export default Todos;