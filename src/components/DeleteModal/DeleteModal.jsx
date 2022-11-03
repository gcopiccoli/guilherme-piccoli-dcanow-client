import closeIcon from "../../assets/icons/close-icon-dark.svg";
import axios from "axios";
import "./DeleteModal.scss";

const DeleteModal = ({ open, onClose, positionToDelete }) => {
  if (!open) return null;
  let userId = 1;

  const deleteHandler = async () => {
    await axios.delete(
      `http://localhost:8084/${userId}/positions/${positionToDelete.id}/delete`
    );

    onClose();
  };

  return (
    <>
      <section className="modal">
        <article className="modal__container">
          <div className="modal__delete">
            <div className="modal__text">
              <div className="modal__image">
                <img onClick={onClose} src={closeIcon} alt="Close icon" />
              </div>
              <div className="modal__text">
                <h2 className="modal__title">
                  Delete {positionToDelete.name} position?
                </h2>
                <p className="modal__body">
                  Please confirm that you’d like to delete the{" "}
                  {positionToDelete.name} position from portfolio. You won’t be
                  able to undo this action.
                </p>
              </div>
            </div>
            <div className="modal__button">
              <button onClick={onClose} className="modal__button-cancel">
                Cancel
              </button>
              <button onClick={deleteHandler} className="modal__button-delete">
                Delete
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DeleteModal;
