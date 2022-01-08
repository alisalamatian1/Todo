import React, { Dispatch, SetStateAction } from 'react'
import todo from '../models/todo';
import classes from "./css/TodoItem.module.css"

const Todo : React.FC <{ item: todo; items: todo[], removeTodo: (key: number)=> void}> = (props) => {
     const removeHandler = ()=>{
        props.removeTodo(props.item.key)
     }
    return (
        <div>
            <li className={classes.TodoItem}> {props.item.text} 
            </li>
            <button onClick={removeHandler}>x</button>
        </div>
    )
}
export default  Todo;
