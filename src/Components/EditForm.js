import React from "react";

function EditForm({
  setIsEditing,
  handleEditFormSubmit,
  currentTodo,
  handleEditInputChange,
}) {
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <h2>Edit Todo</h2>
        <label htmlFor="editTodo">Edit Todo:</label>
        <input
          name="editTodo"
          type="text"
          placeholder="Edit Todo"
          value={currentTodo.text}
          onChange={handleEditInputChange}
        />
        <button type="submit">Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default EditForm;
