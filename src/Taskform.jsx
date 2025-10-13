import React, { useState } from 'react'

export default function Taskform({addTask}) {
  const [task, setTask] = useState('');
  const[priority, setPriority] = useState('medium');
  const[category, setCategory] = useState('general');

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, category, completed: false});
    //reset
    setTask('');
    setPriority("medium");
    setCategory("general");
  }
  return (
      <form onSubmit={handlesubmit} id='task-form'> 
      <div id='inp'>
        <input type="text" placeholder='Enter the task'
        value = {task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>Add Task</button>
        {/*<h1>{task}</h1> */}
      </div>

      <div id='btns'>
        <select value = {priority} onChange={(e)=> setPriority(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <select value = {category} onChange={(e)=> setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        {<h1>{task} {priority} {category}</h1>}
        </div>
      </form>

  )
}
