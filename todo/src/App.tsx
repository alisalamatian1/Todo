import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import Todo from './models/todo';
import NewTodo from './component/NewTodo';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Login from "./Routes/Login"

function App() {
 const [todos, setTodo] = useState <Todo[]> ([]); 
 const addTodo = (text: string)=>{
   const newTodo = new Todo(text);
    setTodo ((currentTodo) =>{
        return currentTodo.concat(newTodo);
    })
 }

 const removeTodo = (key: number) => {
  setTodo ((prevTodo)=>{
    return prevTodo.filter(todo => todo.key !== key)
  })}


  return (
    //<Router>
    <div className="App">
       {/* <Routes> */}
         {/* <Route exact path = "/" element = {<Login/>}/> */}
        <NewTodo onAddTodo= {addTodo}/>
        <Todos items= {todos} removeTodo ={removeTodo}/>
      {/* </Routes> */}
    </div>
    //</Router>
  );
}

export default App;
