
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos from the backend
  useEffect(() => {
    fetch('/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  // Add a new todo
  const addTodo = () => {
    fetch('/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newTodo })
    })
    .then(response => response.json())
    .then(data => {
      setTodos([...todos, data]);
      setNewTodo('');
    })
    .catch(error => console.error('Error adding todo:', error));
  };

  // Update an existing todo
  const updateTodo = (id, completed) => {
    fetch(`/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed })
    })
    .then(response => response.json())
    .then(data => {
      setTodos(todos.map(todo => todo._id === id ? data : todo));
    })
    .catch(error => console.error('Error updating todo:', error));
  };

  // Delete a todo
  const deleteTodo = id => {
    fetch(`/todos/${id}`, { method: 'DELETE' })
    .then(() => {
      setTodos(todos.filter(todo => todo._id !== id));
    })
    .catch(error => console.error('Error deleting todo:', error));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.name}
            {' '}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => updateTodo(todo._id, e.target.checked)}
            />
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
