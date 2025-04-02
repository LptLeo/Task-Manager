import { useState } from "react";
import "./App.scss";
import Modal from "./components/Modal/Modal";
import TaskList from "./components/TaskList";

function App() {
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
            <div className="toolbar w-100 d-flex justify-content-center">
              <button
                className="btn btn-success mx-1"
                title="Adicionar"
                onClick={() => setShowModal(true)}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
              <button className="btn btn-danger mx-1" title="Deletar">
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-primary mx-1" title="Selecionar">
                <i className="bi bi-check2-square"></i>
              </button>
            </div>
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
