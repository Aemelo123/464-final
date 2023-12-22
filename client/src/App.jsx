import React, { useState } from 'react';
import './App.css';

function App() {
 // State to store the list of to-do items
 const [todos, setTodos] = useState([]);
// State to store the user's input for a new to-do item
 const [input, setInput] = useState("");
// Function to handle input changes and update the input state
 const handleInputChange = (e) => {
 setInput(e.target.value);
 };
// Function to add a new to-do item to the list
 const addTodo = () => {
 if (input.trim()) {
 setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
 setInput("");
 }
 };
// Function to delete a to-do item from the list
 const deleteTodo = (id) => {
 setTodos(todos.filter((todo) => todo.id !== id));
 };
// Function to edit the text of a to-do item in the list
 const editTodo = (id, newText) => {
  setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
  );
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