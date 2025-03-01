import React, { useState, useEffect } from "react";

function FetchData1() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div>
      <h2> Todos </h2>
      {todos &&
        todos.map((todo) => {
          return (
            <p key={todo.id}>
              {" "}
              {todo.title} {todo.id}{" "}
            </p>
          );
        })}
    </div>
  );
}

export default FetchData1;
