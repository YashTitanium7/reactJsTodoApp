import React from "react";
import {TodoItem} from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  return (
  <div className="container todo-js-container">
    <h3 className="text-center"> Todo list </h3>
    {todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={ (todo)=>{ onDelete(todo) }}/>
    })}
  </div>
  );
};

export default Todos;
