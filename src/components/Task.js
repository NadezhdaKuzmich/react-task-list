import { useState } from "react";

const Task = ({ id, title, status, removeTask }) => {
  const [checked, setChecked] = useState(status);
  const classes = ["todo"];

  if (checked) classes.push("status");

  const updateStatus = () => {
    setChecked(!checked);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    storedTasks.map((el) => {
      if (el.id === id) {
        el.status = !checked;
      }
      return true;
    });

    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  };

  return (
    <li className={classes.join(" ")}>
      <label>
        <input type="checkbox" checked={checked} onChange={updateStatus} />
        <span>{title}</span>
        <i className="material-icons red-text" onClick={() => removeTask(id)}>
          close
        </i>
      </label>
    </li>
  );
};

export default Task;