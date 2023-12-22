function TodoForm({ input, handleInputChange, addTodo }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a new to-do"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    );
  }
  
  export default TodoForm;
  