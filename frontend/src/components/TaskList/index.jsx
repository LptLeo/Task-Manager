import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks } from "../../redux/tasksSlice";
import "./TaskList.scss";
import { openModal, selectTask, setUpdating } from "../../redux/modalSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasksData, status, error } = useSelector((state) => state.tasks);
  const search = useSelector((state) => state.tasks.search);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const filteredTasks = tasksData.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  if (status === "loading") return <h4>Carregando...</h4>;
  if (status === "failed") return <h4>Erro: {error}</h4>;

  return (
    <div className="task-list mt-3 text-black">
      {tasksData.length === 0 ? (
        <h4>Nenhuma tarefa encontrada</h4>
      ) : (
        filteredTasks.map((task) => (
          <div key={task._id} className="task-container d-flex">
            <div className="task rounded-start-2 bg-light w-100">
              <h4>{task.title}</h4>
              <span>{task.description}</span>
            </div>
            <div className="d-flex flex-column">
              <button
                onClick={() => dispatch(deleteTask(task._id))}
                className="btn btn-danger rounded-circle rounded-start-0 rounded-bottom-0 h-50"
                title="Deletar"
              >
                <i className="bi bi-trash"></i>
              </button>
              <button
                onClick={() => {
                  dispatch(selectTask(task));
                  dispatch(openModal());
                  dispatch(setUpdating(true));
                }}
                className="btn btn-secondary rounded-circle rounded-start-0 rounded-top-0 h-50"
                title="Editar"
              >
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
