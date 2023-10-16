import react, useState from 'react';
import './App css';
import TodoForm from "./components/TodoForm"

function App() {
  return (
    <div className='Todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
