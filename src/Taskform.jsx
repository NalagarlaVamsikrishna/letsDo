import React, { useState } from 'react'

export default function Taskform() {
  const [task, setTask] = useState('');
  const[priority, setPriority] = useState('medium');
  const[category, setCategory] = useState('general');
  return (
      <form id='task-form'> 
      <div id='inp'>
        <input type="text" placeholder='Enter the task'
        onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>Add Task</button>
        {/*<h1>{task}</h1> */}
      </div>

      <div id='btns'>
        <select onChange={(e)=> setPriority(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <select onChange={(e)=> setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        {/*<h1>{task} {priority} {category}</h1>*/}
        </div>
      </form>

  )
}
