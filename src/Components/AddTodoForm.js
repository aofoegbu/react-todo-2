import React from "react";

function AddTodoForm({ todo, handleAddInputChange, handleFormSubmit }) {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2>Add Todo</h2>
        <input
          name="todo"
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={handleAddInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
