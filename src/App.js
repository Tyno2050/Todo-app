import React from 'react';
import DisplayTodo from './components/DisplayTodo';
import InputTodo from './components/InputTodo';
import { TodoContext, TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <DisplayTodo />
        <InputTodo />
      </div>
    </TodoProvider>
  );
}

export default App;
