import React, { useRef } from 'react'

export default function NewTodo() {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current?.value;
    };
    return (
        <form onSubmit={submitHandler}>
            <label> Todo Text</label>
            <input ref = {todoTextInputRef} type="text" id = "text" placeholder='Add the text'/>
            <button> Add todo</button>
        </form>
    )
}
