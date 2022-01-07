import React, { useRef } from 'react'
import classes from "./NewTodo.module.css"

const NewTodo: React.FC <{onAddTodo: (text : string) => void}> = (props)=> {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0){
            return;
        }

        props.onAddTodo(enteredText);

    };
    return (
        <form onSubmit={submitHandler} className= {classes.form}>
            <label htmlFor='text'> Todo Text</label>
            <input ref = {todoTextInputRef} type="text" id = "text" placeholder='Add the text'/>
            <button> Add todo</button>
        </form>
    )
}
export default NewTodo;
