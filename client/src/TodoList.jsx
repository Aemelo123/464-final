function TodoList({ todos, deleteTodo, editTodo }) {
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  