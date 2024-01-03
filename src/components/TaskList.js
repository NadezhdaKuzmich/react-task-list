import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} {...task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TaskList;