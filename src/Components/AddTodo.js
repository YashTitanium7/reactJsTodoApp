import React from "react";
import { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  
  const submit = (e) => {
    e.preventDefault()
    if(!title || !desc) {
      alert("Title or Description cannot be blank!")
    } else {
      props.addTodo(title, desc)
      setTitle("")
      setDesc("")
    }
  }
  
  return (
    <>
      <form className="container mb-5" onSubmit={submit}>
        <h3>Add your tasks!</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => {setDesc(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
