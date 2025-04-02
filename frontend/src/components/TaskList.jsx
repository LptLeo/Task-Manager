import { useEffect, useState } from "react";
import getTaskList from "../api/tasks";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTaskList();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  return (
    <div className="task-list mt-3 text-black">
      {tasks.taskList &&
        tasks.taskList.map((task) => (
          <div key={task._id} className="task-container d-flex">
            <div className="task rounded-start-2 bg-light w-100">
              <span className="fw-bold">{task.title}</span>
            </div>
            <button
              className="btn btn-secondary rounded-end-5 rounded-start-0"
              title="Editar"
            >
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
