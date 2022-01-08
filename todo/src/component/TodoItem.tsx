import React, { Dispatch, SetStateAction } from 'react'
import todo from '../models/todo';
import classes from "./css/TodoItem.module.css"

const Todo : React.FC <{ item: todo; items: todo[], setTodo: Dispatch<SetStateAction<todo[]>>}> = (props : any) => {
     const removeHandler = ()=>{
        props.setTodo(props.items.filter((el:todo)=>{
            
            return el.key !== props.item.key
        }))
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
