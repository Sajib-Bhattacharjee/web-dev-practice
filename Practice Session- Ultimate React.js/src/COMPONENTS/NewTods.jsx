import React, { useState } from "react";

const NewTods = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("From New Todo: ", todo);

    props.onTodos(todo);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Enter a todo: </label>
        <input value={todo} onChange={handleChange} type="text" required />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NewTods;
