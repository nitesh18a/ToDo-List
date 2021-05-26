import React from 'react'
import './index.css';
const ToDolists = (props) => {

    return (
        <>
        <div className="todo_style">
        <span className="fa-items" onClick= {()=>{
                props.onSelect(props.id);
        }}> ❌ </span>
            <li> {props.text} </li>
        </div>
        </>
    )
}

export default ToDolists
