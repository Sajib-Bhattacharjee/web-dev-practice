import React, { useState } from "react";
import Todos from "./Todos";
import NewTods from "./NewTods";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleOnTodos = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <>
      <NewTods onTodos={handleOnTodos} />
      <Todos todos={todos} />
    </>
  );
};

export default Home;
