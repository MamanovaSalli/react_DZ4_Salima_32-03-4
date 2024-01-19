import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1> Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;

// import React from "react";
//
// export default function Search(){
//     function publish(formData){
//         const content = formData.get("content")
//         const button = formData.get("button")
//         alert(`'${content}' was '${button}'button`)
//     }
//
//     function save(formData) {
//         const content = formData.get('content')
//         alert(`Your '${content}' has`)
//     }
//     return(
//         <form action={publish}>
//             <textarea name="content" rows={4} cols={40}/>
//             <br/>
//             <button type="submit" name="button" value='submit'>Publish</button>
//             <button formAction={save}>Save</button>
//         </form>
//     )
// }