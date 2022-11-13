import DcaPositions from "../../components/DcaPositions/DcaPositions";
import "./DcaPage.scss";
import { useState, useEffect } from "react";
import NoData from "../../components/NoData/NoData";

const DcaPage = ({ userPositions }) => {
  const [summedRanks, setSummedRanks] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    const summedRanks = userPositions.reduce((a, b) => {
      return a + b.stock_rank;
    }, 0);
    setSummedRanks(summedRanks);
  }, []);

  return (
    <section className="dca-page">
      <h2 className="dca-page__title">DCA</h2>
      <article className="dca-page__container">
        <nav className="dca-page__nav">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInputValue(Number(e.target.amount.value));
              e.target.reset();
            }}
            className="dca-page__value-input"
          >
            <div className="dca-page__box">
              <label htmlFor="amount" className="dca-page__label">
                $
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="dca-page__input"
                placeholder="Insert amount"
              />
            </div>
            <button className="dca-page__button">+</button>
          </form>
        </nav>
        {userPositions.length === 0 && <NoData />}
        {userPositions.map((positions, i) => (
          <DcaPositions
            summedRanks={summedRanks}
            key={positions.id}
            positions={positions}
            inputValue={inputValue}
          />
        ))}
      </article>
    </section>
  );
};

export default DcaPage;
