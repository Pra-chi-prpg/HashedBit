import React, { useState, useRef, useEffect } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input on first load
    inputRef.current.focus();
  }, []);

  const addTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === "") return;

    const updatedTasks = [...tasks, trimmedTask].sort((a, b) =>
      a.localeCompare(b)
    );
    setTasks(updatedTasks);
    setTask(""); // Clear input field
    inputRef.current.focus(); // Focus input again
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(updatedTasks.sort((a, b) => a.localeCompare(b)));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Todo List</h2>
      <input
        ref={inputRef}
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button
              onClick={() => deleteTask(t)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
