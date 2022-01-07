import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Todo from './models/todo';
function App() {
 const todos = [
   new Todo("lreab"),
   new Todo ("What the hekk ")
 ];
  return (
    <div className="App">
       <Todos items= {todos} />
    </div>
  );
}

export default App;
