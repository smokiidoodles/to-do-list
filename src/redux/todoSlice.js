import { createSlice } from '@reduxjs/toolkit';

// In this file, I define initial state and reducer.

const initialState = {
  todos: [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Redux', completed: false }
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find(todo => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
