import DcaPositions from "../../components/DcaPositions/DcaPositions";
import "./DcaPage.scss";
import { useState, useEffect } from "react";

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
      <nav className="dca-page__nav">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setInputValue(Number(e.target.amount.value));
          }}
          className="dca-page__value-input"
        >
          <input
            type="number"
            id="amount"
            name="amount"
            className="dca-page__input"
            placeholder="Insert amount"
          />
          <button className="dca-page__button">+</button>
        </form>
      </nav>
      {userPositions.map((positions, i) => (
        <DcaPositions
          summedRanks={summedRanks}
          key={positions.id}
          positions={positions}
          inputValue={inputValue}
        />
      ))}
    </section>
  );
};

export default DcaPage;
