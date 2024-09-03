
import { useState } from 'react';

import './../styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    tasks.includes(inputValue)
      ? alert("already contains")
      : setTasks([...tasks, inputValue]);
    setInputValue("");
  };
  const deletefunc = (taskToBeRemoved) => {
    const newArr = tasks.filter((task) => task !== taskToBeRemoved);
    setTasks(newArr);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <h1>useState,Async Nature and lazy loading</h1>
      <div style={{ margin: "20px" }}>
        <h2>To-Do List</h2>
        <input
          placeholder="Enter Todo"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            
          }}
          onKeyDown={handleKeyPress}
        />

        <button onClick={addTask}>Add Todo</button>
      </div>
      <ul className="tasks-list">
        {tasks.map((task) => {
          return (
            <li className="task">
              <span>{task}</span>
              <button onClick={() => deletefunc(task)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}



export default App
