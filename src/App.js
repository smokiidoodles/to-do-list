// this app uses Redux to manage storage.
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoCounter from './components/TodoCounter';
import InfoModal from './components/InfoModal';
import './App.css';

const App = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Todo List</h1>
        <button onClick={() => setShowInfo(true)} style={{ position: 'absolute', top: 10, left: 10 }}>
          Info
        </button>
        <AddTodo />
        <TodoList />
        <TodoCounter />
        <InfoModal show={showInfo} onClose={() => setShowInfo(false)} />
      </header>
    </div>
  );
};

export default App;
