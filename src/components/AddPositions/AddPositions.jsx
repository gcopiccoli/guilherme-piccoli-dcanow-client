import { useState, useEffect } from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import "./AddPositions.scss";

const AddPositions = ({ handleAddStock, selectedStock }) => {
  // const [stocks, setStocks] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  // if (!stocks) {
  //   return;
  // }

  // const onFormSubmit = () => {
  //   // make axios call here
  //   // in req.body, package form fields
  // };

  // if (!selectedStock) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <nav className="add-form">
      <h3 className="add-form__title">Add new position</h3>
      <form className="add-form__stock-search">
        <article className="add-form__container">
          <input
            type="search"
            className="add-form__search"
            id="search"
            name="search"
            placeholder="Search stock"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-form__button">
            <img
              src={searchIcon}
              alt="Search icon"
              className="add-form__button-icon"
              onClick={(e) => handleAddStock(e, searchTerm)}
            />
          </button>
        </article>
      </form>
      {selectedStock && (
        <form action="" className="add-form__stock-info">
          <article className="add-form__container-input">
            <div className="add-form__box">
              <label htmlFor="" className="add-form__label">
                Symbol
              </label>
              <p className="add-form__data"> {selectedStock.symbol}</p>
            </div>
            <div className="add-form__box">
              <label htmlFor="" className="add-form__label">
                Name
              </label>
              <p className="add-form__data">{selectedStock.name}</p>
            </div>
            <div className="add-form__box">
              <label htmlFor="" className="add-form__label">
                Price
              </label>
              <p className="add-form__data"> {selectedStock.price}</p>
            </div>
          </article>
          <div className="add-form__wrapper">
            <article className="add-form__container-input">
              <div className="add-form__box-data">
                <label htmlFor="" className="add-form__label">
                  Rank
                </label>
                <select className="add-form__input" id="rank" name="rank">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                  <option value="1">6</option>
                  <option value="1">9</option>
                  <option value="1">10</option>
                </select>
              </div>
              <div className="add-form__box-data">
                <label htmlFor="" className="add-form__label">
                  Value Invested
                </label>
                <input
                  type="number"
                  className="add-form__input"
                  id="initial-value-invested"
                  name="initial-value-invested"
                />
              </div>
            </article>
            <article className="add-form__container-input">
              <div className="add-form__box-data">
                <label htmlFor="" className="add-form__label">
                  Average Price
                </label>
                <input
                  type="number"
                  className="add-form__input"
                  id="average-price"
                  name="average-price"
                />
              </div>
              <div className="add-form__box-data">
                <label htmlFor="" className="add-form__label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="add-form__input"
                  id="quantity"
                  name="quantity"
                />
              </div>
            </article>
          </div>
          <div className="add-form__button-add">
            <p className="add-form__button-text">+ Add stock</p>
          </div>
        </form>
      )}
    </nav>
  );
};

export default AddPositions;
