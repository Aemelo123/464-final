import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = async () => {
    if (input.trim()) {
      const newTodo = {
        text: input.trim(),
        completed: false,
      };
      try {
        const response = await axios.post("http://localhost:5000/todos", newTodo);
        setTodos([...todos, response.data]);
        setInput("");
      } catch (error) {
        console.error("Error adding a new todo:", error);
      }
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const editTodo = async (id, newText) => {
    try {
      await axios.patch(`http://localhost:5000/todos/${id}`, { text: newText });
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
      );
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a new to-do"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button
              onClick={() => {
                const newText = prompt("Edit your to-do:", todo.text);
                if (newText) {
                  editTodo(todo.id, newText);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
