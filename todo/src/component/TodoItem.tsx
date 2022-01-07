import React from 'react'
import todo from '../models/todo';
import classes from "./css/TodoItem.module.css"

const Todo : React.FC <{item : todo}>= (props) => {
    // const removeHandler = (e : React.MouseEvent)=>{

    // }
    return (
        <div>
            <li className={classes.TodoItem}> {props.item.text} 
            </li>
            {/* <button onClick={removeHandler()}>
            X
            </button> */}
        </div>
    )
}
export default  Todo;
