import React from 'react'
import todo from '../models/todo';
import classes from "./TodoItem.module.css"

const Todo : React.FC <{item : todo}>= (props) => {
    return (
        <div>
            <li className={classes.TodoItem}> {props.item.text} </li>
        </div>
    )
}
export default  Todo;
