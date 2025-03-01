import React from "react";

const TodoItem = ({ text, onDelete }) => {
  return (
    <div className="todo-item">
      {text}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
