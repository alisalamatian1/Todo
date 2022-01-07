import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Todo from './models/todo';
import NewTodo from './component/NewTodo';

function App() {
 const [todos, setTodo] = useState <Todo[]> ([]); 
 const addTodo = (text: string)=>{
   const newTodo = new Todo(text);
    setTodo ((currentTodo) =>{
        return currentTodo.concat(newTodo);
    })
 }
  return (
    <div className="App">
       <NewTodo onAddTodo= {addTodo}/>
       <Todos items= {todos} />
    </div>
  );
}

export default App;
