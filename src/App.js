import React, { useState, useEffect } from "react";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import EditForm from "./Components/EditForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleAddInputChange = (e) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...todos, { id: todos.length + 1, text: todo.trim() }]);
    }
    setTodo("");
  };

  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    // console.log(currentTodo);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          setIsEditing={setIsEditing}
          handleEditFormSubmit={handleEditFormSubmit}
          currentTodo={currentTodo}
          handleEditInputChange={handleEditInputChange}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          handleAddInputChange={handleAddInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
