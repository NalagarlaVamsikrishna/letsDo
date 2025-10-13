
import React, { useEffect, useState } from 'react'
import Taskform from './Taskform'
import Tasklist from './Tasklist'
import Progresstracker from './Progresstracker'

export default function App() {
  const [tasks, settasks] = useState([]);
  
  useEffect(() => {
   localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    settasks([...tasks,task]);
  }

  return (
    <div>
      <h1>Daily Progress</h1>
      <p>Let's do our work</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>Clear all Components</button>
    </div>
  )
}
