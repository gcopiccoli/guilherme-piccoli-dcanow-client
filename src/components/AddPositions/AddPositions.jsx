import { useState } from "react";
import axios from "axios";
import searchIcon from "../../assets/icons/search-icon.svg";
import "./AddPositions.scss";
import { useNavigate } from "react-router-dom";

const AddPositions = ({ handleAddStock, selectedStock, getUserPositions }) => {
  // const [stocks, setStocks] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  let userId = 1;
  // if (!stocks) {
  //   return;
  // }

  // const onFormSubmit = () => {
  //   // make axios call here
  //   // in req.body, package form fields
  // };

  const handleChange = (e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: +value,
    });
  };

  const addPositionHandler = async (e) => {
    e.preventDefault();

    console.log("test");

    console.log({ ...formData, stock_symbol: searchTerm });

    await axios.post(`http://localhost:8084/${userId}/positions/add`, {
      ...formData,
      stock_symbol: searchTerm,
    });

    console.log(formData);
    getUserPositions();
    setSearchTerm("");
    // e.target.reset();

    // navigate(`/${userId}/positions/all`);
  };

  console.log(formData);
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
            value={searchTerm}
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
        <form onSubmit={addPositionHandler} className="add-form__stock-info">
          <article className="add-form__container-input">
            <div className="add-form__box">
              <p className="add-form__label">Symbol</p>
              <p className="add-form__data"> {selectedStock.symbol}</p>
            </div>
            <div className="add-form__box">
              <p className="add-form__label">Name</p>
              <p className="add-form__data">{selectedStock.name}</p>
            </div>
            <div className="add-form__box">
              <p className="add-form__label">Price</p>
              <p className="add-form__data">$ {selectedStock.price}</p>
            </div>
          </article>
          <div className="add-form__wrapper">
            <article className="add-form__container-input">
              <div className="add-form__box-data">
                <label htmlFor="stock_rank" className="add-form__label">
                  Rank
                </label>
                <select
                  className="add-form__input add-form__input-rank"
                  id="stock_rank"
                  name="stock_rank"
                  onChange={handleChange}
                >
                  <option value="Select option">Select option</option>
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
              <div className="add-form__box-data">
                <label
                  htmlFor="initial_value_invested"
                  className="add-form__label"
                >
                  Value Invested
                </label>
                <input
                  type="number"
                  className="add-form__input"
                  id="initial_value_invested"
                  name="initial_value_invested"
                  onChange={handleChange}
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
                  id="average_price"
                  name="average_price"
                  onChange={handleChange}
                />
              </div>
              <div className="add-form__box-data">
                <label htmlFor="quantity" className="add-form__label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="add-form__input"
                  id="quantity"
                  name="quantity"
                  onChange={handleChange}
                />
              </div>
            </article>
          </div>
          <button className="add-form__button-add">
            <span className="add-form__button-text">+ Add stock</span>
          </button>
        </form>
      )}
    </nav>
  );
};

export default AddPositions;
