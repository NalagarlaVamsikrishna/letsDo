import React from 'react'

export default function Tasklist({tasks, updateTask, deleteTask}) {
  const toggleComplete = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].complete };
    updateTask(updatedTask, index);
  };
  
  return (
    <div className='task-list'>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key = {index} className= {task.completed ? 'completed': ''}>
            <div>
              <span>
              {task.text}
              </span>
              <small>{task.priority} {task.category}</small>
            </div>            
              <button onClick={()=> toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
                </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
