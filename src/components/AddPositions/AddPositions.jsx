import searchIcon from "../../assets/icons/search-icon.svg";

import "./AddPositions.scss";

const AddPositions = () => {
  return (
    <nav className="add-form">
      <h3 className="add-form__title">Add new position</h3>
      <form action="" className="add-form__stock-search">
        <article className="add-form__container">
          <input
            type="text"
            className="add-form__search"
            id="search"
            name="search"
            placeholder="Search stock"
          />
          <button className="add-form__button">
            <img
              src={searchIcon}
              alt="Search icon"
              className="add-form__button-icon"
            />
          </button>
        </article>
      </form>
      <form action="" className="add-form__stock-info">
        <article className="add-form__container-input">
          <div className="add-form__box">
            <label htmlFor="" className="add-form__label">
              Stock
            </label>
            <p className="add-form__data">AAPL</p>
          </div>
          <div className="add-form__box">
            <label htmlFor="" className="add-form__label">
              Name
            </label>
            <p className="add-form__data">Apple Inc.</p>
          </div>
          <div className="add-form__box">
            <label htmlFor="" className="add-form__label">
              Price
            </label>
            <p className="add-form__data">172.19</p>
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
      </form>
    </nav>
  );
};

export default AddPositions;
