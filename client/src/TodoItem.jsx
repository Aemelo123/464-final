function TodoItem({ todo, deleteTodo, editTodo }) {
    return (
      <li>
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
    );
  }
  
  export default TodoItem;
  