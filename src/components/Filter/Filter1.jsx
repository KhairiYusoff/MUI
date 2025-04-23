import React from "react";

const TodoListItem = () => {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn TypeScript", completed: false },
  ]);
  const [filter, setFilter] = React.useState("all"); // all | active | completed

  const handleAddTodo = () => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>✅ Todo List</h1>

      {/* Add Todo */}
      <input
        type="text"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* Filter Dropdown */}

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginLeft: 8 }}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      {/* Todo List */}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: 8,
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListItem;
