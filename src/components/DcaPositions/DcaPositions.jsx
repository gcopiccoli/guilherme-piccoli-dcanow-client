import "./DcaPositions.scss";
import { formatter } from "../../utilities/api";

const DcaPositions = ({ positions, summedRanks, inputValue }) => {
  let currentInvestment = positions.quantity * positions.price;
  let investmentRatio =
    (currentInvestment / positions.initial_value_invested) * 100 - 100;

  return (
    <section className="positions-dca">
      <article className="positions-dca__container">
        <div className="positions-dca__wrapper">
          <div className="positions-dca__box">
            <p className="positions-dca__label">Symbol</p>
            <p className="positions-dca__data">{positions.stock_symbol}</p>
          </div>
          <div className="positions-dca__box">
            <p className="positions-dca__label">Name</p>
            <p className="positions-dca__data">{positions.name}</p>
          </div>
          <div className="positions-dca__box">
            <p className="positions-dca__label">Price</p>
            <p className="positions-dca__data">${positions.price}</p>
          </div>
        </div>
        <div className="positions-dca__wrapper">
          <div className="positions-dca__box">
            <p className="positions-dca__label">Rank</p>
            <select
              className="positions-dca__data positions-dca__data-rank"
              id="rank"
              name="rank"
            >
              <option value={positions.stock_rank}>
                {positions.stock_rank}
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
          <div className="positions-dca__box">
            <p className="positions-dca__label">Current Inv.</p>
            <p
              className={`positions-dca__data ${
                investmentRatio > 0
                  ? "positions-dca__data--positive"
                  : "positions-dca__data--negative"
              }`}
            >
              {formatter.format(currentInvestment)}
            </p>
          </div>
          <div className="positions-dca__box">
            <p className="positions-dca__label">%</p>
            <p
              className={`positions-dca__data ${
                investmentRatio > 0
                  ? "positions-dca__data--positive"
                  : "positions-dca__data--negative"
              }`}
            >
              {Math.round(investmentRatio)}%
            </p>
          </div>
        </div>
      </article>
      <div className="positions-dca__value-box">
        <p className="positions-dca__value">
          {inputValue
            ? `${formatter.format(
                (inputValue / summedRanks) * positions.stock_rank
              )}`
            : "$0"}
        </p>
      </div>
    </section>
  );
};

export default DcaPositions;
