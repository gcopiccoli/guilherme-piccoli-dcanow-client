import "./DcaPositions.scss";

const DcaPositions = ({ positions, summedRanks, inputValue }) => {
  let currentInvestment = positions.quantity * positions.price;
  let investmentRatio =
    (currentInvestment / positions.initial_value_invested) * 100 - 100;

  return (
    <section className="positions-dca">
      <article className="positions-dca__container">
        <div className="positions-dca__wrapper">
          <div className="positions-dca__box">
            <p className="positions-dca__label">Ticker</p>
            <p className="positions-dca__data">{positions.stock_symbol}</p>
          </div>
          <div className="positions-dca__box">
            <p className="positions-dca__label">Name</p>
            <p className="positions-dca__data">{positions.name}</p>
          </div>
          <div className="positions-dca__box">
            <p className="positions-dca__label">Price</p>
            <p className="positions-dca__data">$ {positions.price}</p>
          </div>
        </div>
        <div className="positions-dca__wrapper">
          <div className="positions-dca__box">
            <p className="positions-dca__label">Rank</p>
            <input
              type="number"
              id="rank"
              name="rank"
              className="positions-dca__data"
              min="1"
              max="5"
              value={positions.stock_rank}
            />
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
              $ {Math.round(currentInvestment)}
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
              $ {positions.price}
            </p>
          </div>
        </div>
      </article>
      <div className="positions-dca__value-box">
        <p className="positions-dca__value">
          {inputValue
            ? `$ ${Math.round(
                (inputValue / summedRanks) * positions.stock_rank
              )}`
            : "$0"}
        </p>
      </div>
    </section>
  );
};

export default DcaPositions;
