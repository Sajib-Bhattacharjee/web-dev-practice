import React, { useState } from "react";

const CompleteTodo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo) {
      setTodos([...todos, { text: todo, id: Date.now() }]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTodo;
