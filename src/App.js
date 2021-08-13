import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import React, { useState, useEffect } from 'react';
import AddTodo from "./Components/AddTodo";

const App = () => {

  let initTodos;
  if(localStorage.getItem("todos")===null) {
    initTodos = []
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"))
  }
  
  const onDelete = (todo) => {
    console.log(`I'm onDelete function of todo no. ${todo.sno}`);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log(`todo title: ${title} & todo desc: ${desc}`);
    let sno;
    (todos.length===0) ? sno = 0 : sno = todos[todos.length - 1].sno + 1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
  }
  
  const [todos, setTodos] = useState(initTodos)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Header/>
      <AddTodo addTodo={addTodo}/>
      
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
