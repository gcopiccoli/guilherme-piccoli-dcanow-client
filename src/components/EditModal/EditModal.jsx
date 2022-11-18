import { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close-icon-dark.svg";
import axios from "axios";
import "./EditModal.scss";
import { useParams } from "react-router-dom";

const EditModal = ({ open, onClose, positionToEdit }) => {
  const [formData, setFormData] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    setFormData(positionToEdit);
  }, [positionToEdit]);

  if (!open) return null;

  const handleChange = (e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: +value,
    });
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const copiedFormData = { ...formData };
    delete copiedFormData["name"];
    delete copiedFormData["price"];

    await axios.patch(
      `http://localhost:8084/${userId}/positions/${positionToEdit.id}/update`,
      copiedFormData
    );

    onClose();
  };

  return (
    <>
      <section className="modal-edit">
        <article className="modal-edit__container">
          <div className="modal-edit__edit">
            <div className="modal-edit__text">
              <div className="modal-edit__image">
                <img onClick={onClose} src={closeIcon} alt="Close icon" />
              </div>
              <div className="modal-edit__copy">
                <h2 className="modal-edit__title">
                  Edit {positionToEdit.name} position?
                </h2>
              </div>
            </div>
            <div className="modal-edit__positions">
              <form className="modal-edit__stock-info">
                <article className="modal-edit__container-input">
                  <div className="modal-edit__box">
                    <label htmlFor="" className="modal-edit__label">
                      Symbol
                    </label>
                    <p className="modal-edit__data">
                      {positionToEdit.stock_symbol}
                    </p>
                  </div>
                  <div className="modal-edit__box">
                    <label htmlFor="" className="modal-edit__label">
                      Name
                    </label>
                    <p className="modal-edit__data">{positionToEdit.name}</p>
                  </div>
                  <div className="modal-edit__box">
                    <label htmlFor="" className="modal-edit__label">
                      Price
                    </label>
                    <p className="modal-edit__data">$ {positionToEdit.price}</p>
                  </div>
                </article>
                <div className="modal-edit__wrapper">
                  <article className="modal-edit__container-input">
                    <div className="modal-edit__box-data">
                      <label htmlFor="stock_rank" className="modal-edit__label">
                        Rank
                      </label>
                      <select
                        onChange={handleChange}
                        className="modal-edit__input modal-edit__input-rank"
                        id="stock_rank"
                        name="stock_rank"
                      >
                        <option value={positionToEdit.stock_rank}>
                          {positionToEdit.stock_rank}
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <div className="modal-edit__box-data">
                      <label
                        htmlFor="initial_value_invested"
                        className="modal-edit__label"
                      >
                        Value Invested
                      </label>
                      <input
                        type="number"
                        className="modal-edit__input"
                        id="initial_value_invested"
                        name="initial_value_invested"
                        onChange={handleChange}
                        defaultValue={positionToEdit.initial_value_invested}
                      />
                    </div>
                  </article>
                  <article className="modal-edit__container-input">
                    <div className="modal-edit__box-data">
                      <label
                        htmlFor="average_price"
                        className="modal-edit__label"
                      >
                        Average Price
                      </label>
                      <input
                        type="number"
                        className="modal-edit__input"
                        id="average_price"
                        name="average_price"
                        onChange={handleChange}
                        defaultValue={positionToEdit.average_price}
                      />
                    </div>
                    <div className="modal-edit__box-data">
                      <label htmlFor="" className="modal-edit__label">
                        Quantity
                      </label>
                      <input
                        type="number"
                        className="modal-edit__input"
                        id="quantity"
                        name="quantity"
                        onChange={handleChange}
                        defaultValue={positionToEdit.quantity}
                      />
                    </div>
                  </article>
                </div>
              </form>
            </div>
            <div className="modal__button">
              <button onClick={onClose} className="modal-edit__button-cancel">
                Cancel
              </button>
              <button onClick={editHandler} className="modal-edit__button-edit">
                Edit
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default EditModal;
