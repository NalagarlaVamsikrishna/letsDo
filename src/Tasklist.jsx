import React from 'react'

export default function Tasklist({tasks}, {updateTask}, {deleteTask}) {
  const toggleComplete = {}
  
  return (
    <div className='task-list'>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) =>{
          <li key = {index} className= {task.cpmpleted ? 'completed': ''}>
            <div>
              {task.text}
              <small>{task.priority} {task.category}</small>
            </div>

            <div>
              <button onClick={()=> toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
                </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
