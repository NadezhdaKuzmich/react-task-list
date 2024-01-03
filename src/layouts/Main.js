import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: 0,
    title: "Build an app",
    status: true,
  },
  {
    id: 1,
    title: "Learn Angular",
    status: false,
  },
  {
    id: 2,
    title: "Go to the gym",
    status: false,
  },
];

const Main = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialValue;
  });
  const [taskTitle, setTaskTitle] = useState("");

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (event) => {
    if (event.key === "Enter" && event.target.value) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          status: false,
        },
      ]);
      setTaskTitle("");
    }
  };

  const removeTask = (id) => {
    let updateTasks = tasks.filter((item) => (item.id !== id ? true : false));
    setTasks(updateTasks);
  };

  return (
    <div className="container">
      <h1>Note Your Tasks</h1>
      <span>{`${month} ${day}, ${year}`}</span>
      <div className="input-field">
        <input
          id="task-name"
          type="text"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          onKeyDown={addTask}
        />
        <label htmlFor="task-name">Task Name</label>
      </div>
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Main;