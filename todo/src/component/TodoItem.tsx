import React from 'react'
import todo from '../models/todo';

const Todo : React.FC <{item : todo}>= (props) => {
    return (
        <div>
            <li> {props.item.text} </li>
        </div>
    )
}
export default  Todo;
