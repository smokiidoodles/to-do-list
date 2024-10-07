//The Structure and function of each 'to-do' task
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleComplete } from '../redux/todoSlice';
import { useState } from 'react';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      if (newText.trim()) {
        dispatch(editTodo({ id: todo.id, text: newText }));
        setIsEditing(false);
      }
    }
  };

  return (
    <div style={{ opacity: todo.completed ? 0.5 : 1, display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleComplete(todo.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit} disabled={todo.completed}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
