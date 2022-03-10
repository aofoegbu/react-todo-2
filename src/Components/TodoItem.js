import React from "react";

function TodoItem({ todo, handleEditClick, handleDeleteClick }) {
  return (
    <div>
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => handleEditClick(todo)}>Edit</button>
        <button onClick={() => handleDeleteClick(todo.id)}>X</button>
      </li>
    </div>
  );
}
export default TodoItem;
