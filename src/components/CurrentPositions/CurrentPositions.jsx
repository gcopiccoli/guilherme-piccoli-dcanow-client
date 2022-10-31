import "./CurrentPositions.scss";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";

const CurrentPositions = ({ stockData, positions }) => {
  return (
    <section className="positions">
      <h3 className="positions__title">Current Positions</h3>

      <article className="positions__card">
        <div className="positions__wrapper">
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Stock
            </p>
            <p className="positions__data">{stockData.symbol}</p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Name
            </p>
            <p className="positions__data">{stockData.name}</p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Price
            </p>
            <p className="positions__data">{stockData.price}</p>
          </div>
        </div>
        <div className="positions__wrapper">
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Initial Inv.
            </p>
            <p className="positions__data">
              {positions.initial_value_invested}
            </p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Current Inv.
            </p>
            <p className="positions__data">172.19</p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              %
            </p>
            <p className="positions__data">172.19</p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              P/L
            </p>
            <p className="positions__data">172.19</p>
          </div>
        </div>
        <div className="positions__wrapper">
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Rank
            </p>
            <p className="positions__data">{positions.stock_rank}</p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Quantity
            </p>
            <p className="positions__data">{positions.quantity}</p>
          </div>
          <div className="positions__box">
            <p htmlFor="" className="positions__label">
              Avg. Price
            </p>
            <p className="positions__data">{positions.average_price}</p>
          </div>
        </div>
        <div className="position__wrapper">
          <img src={editIcon} alt="Edit icon" className="position__edit-icon" />
          <img
            src={deleteIcon}
            alt="Edit icon"
            className="position__delete-icon"
          />
        </div>
      </article>
    </section>
  );
};

export default CurrentPositions;
