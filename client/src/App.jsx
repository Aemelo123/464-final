import React, { useState } from 'react';
import './App.css';


function App() {
 const [todos, setTodos] = useState([
 { id: 1, text: "Build a to-do app", completed: false },
 { id: 2, text: "Celebrate!", completed: false },
 ]);


return (
 <div>
 <h1>To-Do List</h1>
 <ul>
 {todos.map((todo) => (
 <li key={todo.id}>{todo.text}</li>
 ))}
 </ul>
 </div>
 );
}
export default App;