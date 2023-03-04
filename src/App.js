import { useState, useEffect } from 'react';
import './App.css';
import {getTasks, addTask} from './Service/TaskService'

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function getAllTask(){
    getTasks().then(res => {
      setTasks(res)
    })
    console.log("tasks : " + tasks)
  }

  function handlSubmit(event){
    event.preventDefault()
    addTask(task)
    
  }

  function handleChange(event){
    setTask(event.target.value)
  }

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handlSubmit}>
        <label >Type a task : </label>
        <input type="text" value={task} onChange={handleChange}/>
        <button typeof='submit'>Add New Task</button>
      </form>
      <button onClick={getAllTask}>Show Tasks</button>
      <div>
        {tasks.map(task => {
          return <p key={task.id}>{task.task}</p>
        })}
      </div>
    </div>
  );
}

export default App;
