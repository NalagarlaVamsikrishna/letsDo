
import React, { useEffect, useState } from 'react'
import Taskform from './Taskform'
import Tasklist from './Tasklist'
import Progresstracker from './Progresstracker'
import './Style.css'
export default function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
   localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks,task])
  }

  const updateTask = (updatedTask, index)=>{
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !=index))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div className='App'>
      <header>
      <h1 className='title'>Daily Progress</h1>
      <p className='tagline'>Let's do our work</p>
      </header>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      {tasks.length>0 && (<button onClick={clearTasks}>Clear all Components</button>)}
    </div>
  )
}
