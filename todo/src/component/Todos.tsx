import React from 'react'
import todo from '../models/todo';
import Todo from './TodoItem';
import classes from "./css/Todos.module.css"

const Todos: React.FC <{items: todo[]}>= (props) => {
    return (
        <div>
            <ul className= {classes.todos}> 
            {props.items.map(item => {
                return <Todo key = {item.id} item = {item} /> 
            })}
            </ul>
        </div>
    )
}
export default Todos;
