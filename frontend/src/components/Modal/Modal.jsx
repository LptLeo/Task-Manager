import "./Modal.scss";

const Modal = ({ activatedModal, showModal }) => {
  const handleOverlayClick = (e) => {
    e.target.classList.contains("modal-overlay") && activatedModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay d-flex w-100 h-100 position-fixed bg-secondary bg-opacity-50" onClick={(e) => handleOverlayClick(e)}>
          <div className="addModal w-50 h-50 bg-light rounded">
            <div className="topModal d-flex justify-content-between border-bottom border-color-secondary py-1 px-2">
              <h4 className="m-0 p-2">Título do Modal</h4>
              <i
                className="bi bi-x-lg"
                onClick={() => activatedModal(false)}
              ></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
