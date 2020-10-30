import React from 'react'
import './task.css'

const Task = ({task}) => {
    return (
        <div style={{display:"flex", alignItems :"center"  }} >
            <p className={task.isDone?"green":"red"}>{task.description}</p>
            {task.description?<button style={{width:'50px', height:"30px",margin:"10px"}}>Edit</button>:null}
        </div>
    )
}

export default Task
