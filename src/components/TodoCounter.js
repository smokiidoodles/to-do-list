//A component below displays the amount of items to do.
import React from 'react';
import { useSelector } from 'react-redux';

const TodoCounter = () => {
  const todoCount = useSelector((state) => state.todos.todos.length);

  return (
    <div style={{ position: 'fixed', top: 10, right: 10 }}>
      <span>Tasks: {todoCount}</span>
    </div>
  );
};

export default TodoCounter;
