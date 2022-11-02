import "./CurrentPositions.scss";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import Loader from "../Loader/Loader";

const CurrentPositions = ({
  stockData,
  positions,
  setIsOpen,
  setPositionToDelete,
}) => {
  let currentInvestment = positions.quantity * positions.price;
  let investmentRatio =
    (currentInvestment / positions.initial_value_invested) * 100 - 100;
  let investmentPandL = currentInvestment - positions.initial_value_invested;

  const deleteHandler = () => {
    setIsOpen(true);
    setPositionToDelete(positions);
  };

  if (!positions) {
    return <Loader />;
  }
  return (
    <article className="positions__card">
      <div className="positions__wrapper">
        <div className="positions__box">
          <p className="positions__label">Ticker</p>
          <p className="positions__data">{positions.stock_symbol}</p>
        </div>
        <div className="positions__box">
          <p className="positions__label">Name</p>
          <p className="positions__data">{positions.name}</p>
        </div>
        <div className="positions__box">
          <p className="positions__label">Price</p>
          <p className="positions__data">$ {positions.price}</p>
        </div>
      </div>
      <div className="positions__wrapper">
        <div className="positions__box">
          <p className="positions__label">Initial Inv.</p>
          <p className="positions__data">
            $ {positions.initial_value_invested}
          </p>
        </div>
        <div className="positions__box">
          <p className="positions__label">Current Inv.</p>
          <p className="positions__data">$ {Math.round(currentInvestment)}</p>
        </div>
        <div className="positions__box">
          <p className="positions__label">%</p>
          <p
            className={`positions__data ${
              investmentRatio > 0
                ? "positions__data--positive"
                : "positions__data--negative"
            }`}
          >
            {Math.round(investmentRatio)}%
          </p>
        </div>
        <div className="positions__box">
          <p className="positions__label">P/L</p>
          <p
            className={`positions__data ${
              investmentRatio > 0
                ? "positions__data--positive"
                : "positions__data--negative"
            }`}
          >
            $ {Math.round(investmentPandL)}
          </p>
        </div>
      </div>
      <div className="positions__wrapper">
        <div className="positions__box">
          <p className="positions__label">Rank</p>
          <p className="positions__data">{positions.stock_rank}</p>
        </div>
        <div className="positions__box">
          <p className="positions__label">Quantity</p>
          <p className="positions__data">{positions.quantity}</p>
        </div>
        <div className="positions__box">
          <p className="positions__label">Avg. Price</p>
          <p className="positions__data">$ {positions.average_price}</p>
        </div>
      </div>
      <div className="positions__wrapper">
        <img src={editIcon} alt="Edit icon" className="positions__edit-icon" />
        <img
          onClick={deleteHandler}
          src={deleteIcon}
          alt="Edit icon"
          className="positions__delete-icon"
        />
      </div>
    </article>
  );
};

export default CurrentPositions;
