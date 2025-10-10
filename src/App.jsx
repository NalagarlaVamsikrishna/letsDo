
import React from 'react'
import Taskform from './Taskform'
import Tasklist from './Tasklist'
import Progresstracker from './Progresstracker'

export default function App() {
  return (
    <div>
      <h1>Daily Progress</h1>
      <p>Let's do our work</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all Components</button>
    </div>
  )
}
