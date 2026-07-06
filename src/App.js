import React, { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((item, i) => i !== index);
    setTasks(updatedTasks);
  }

  function completeTask(index) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  }

  function clearAll() {
    setTasks([]);
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="container">

      <h1>
        
        To-Do List
      </h1>

      <div className="input-box">

        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button onClick={addTask}>
          Add
        </button>

      </div>

      <div className="count">

        <p>Total : {tasks.length}</p>

        <p>Completed : {completedTasks}</p>

        <p>Pending : {pendingTasks}</p>

      </div>

      {tasks.length === 0 ? (

        <p className="empty">
          No Tasks Added
        </p>

      ) : (

        tasks.map((item, index) => (

          <div className="task" key={index}>

            <div className="left">

              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => completeTask(index)}
              />

              <span
                className={
                  item.completed ? "done" : ""
                }
              >
                {item.text}
              </span>

            </div>

            <button
              className="delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

          </div>

        ))

      )}

      {tasks.length > 0 && (

        <button
          className="clear"
          onClick={clearAll}
        >
          Clear All
        </button>

      )}

    </div>
  );
}

export default App;
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   function addTask() {
//     if (task.trim() === "") {
//       alert("Please enter a task");
//       return;
//     }

//     const newTask = {
//       text: task,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTask("");
//   }

//   function deleteTask(index) {
//     const updatedTasks = tasks.filter((item, i) => i !== index);
//     setTasks(updatedTasks);
//   }

//   function completeTask(index) {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   }

//   function clearAll() {
//     setTasks([]);
//   }

//   const completed = tasks.filter(task => task.completed).length;
//   const pending = tasks.length - completed;

//   return (
//     <div className="container">

//       <h1>To-Do List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           placeholder="Enter your task..."
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addTask();
//             }
//           }}
//         />

//         <button onClick={addTask}>Add</button>
//       </div>

//       <div className="count">
//         <p>Total : {tasks.length}</p>
//         <p>Completed : {completed}</p>
//         <p>Pending : {pending}</p>
//       </div>

//       {tasks.length === 0 ? (
//         <p className="empty">No Tasks Added</p>
//       ) : (
//         tasks.map((item, index) => (
//           <div className="task" key={index}>

//             <div className="left">

//               <input
//                 type="checkbox"
//                 checked={item.completed}
//                 onChange={() => completeTask(index)}
//               />

//               <span
//                 className={item.completed ? "done" : ""}
//               >
//                 {item.text}
//               </span>

//             </div>

//             <button
//               className="delete"
//               onClick={() => deleteTask(index)}
//             >
//               Delete
//             </button>

//           </div>
//         ))
//       )}

//       {tasks.length > 0 && (
//         <button className="clear" onClick={clearAll}>
//           Clear All
//         </button>
//       )}

//     </div>
//   );
// }

// export default App;// 