import React, { Dispatch, SetStateAction } from 'react'
import todo from '../models/todo';
import Todo from './TodoItem';
import classes from "./css/Todos.module.css"

const Todos: React.FC <{items: todo[], removeTodo: (key: number)=> void}> = (props) => {
    
    return (
        <div>
            <ul className= {classes.todos}> 
            {props.items.map((item:todo) => {

                return (<div> 
                    <Todo key = {item.key} item = {item} items={props.items} removeTodo = {props.removeTodo}/> 
                    
                    </div>
                )
            })}
            </ul>
        </div>
    )
}
export default Todos;
