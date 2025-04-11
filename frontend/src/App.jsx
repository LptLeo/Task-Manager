import { useState } from "react";
import "./App.scss";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";
import { openModal } from "./redux/modalSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const activeModal = (value) => {
    setShowModal(value);
  };

  return (
    <>
      <Modal activatedModal={activeModal} showModal={showModal} />
      <div className="bg-container min-w-100 min-vh-100 bg-dark bg-gradient text-light">
        <div className="interface-container w-50 mx-auto">
          <h1 className="mx-auto w-100 text-center fw-bold">Task Manager</h1>
          <div className="interface w-75 mx-auto rounded">
            <header className="toolbar w-100 d-flex justify-content-center">
              <div className="d-flex w-100 mx-1">
                <input
                  className="form-control rounded-end-0"
                  type="text"
                  placeholder="Filtrar"
                />
                <button
                  className="btn btn-secondary rounded-start-0"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
              <button
                className="btn btn-success mx-1"
                title="Adicionar"
                onClick={() => dispatch(openModal())}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
              <button className="btn btn-primary mx-1" title="Selecionar">
                <i className="bi bi-check2-square"></i>
              </button>
            </header>
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
