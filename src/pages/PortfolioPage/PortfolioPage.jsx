import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import "./PortfolioPage.scss";

const PortfolioPage = ({
  userPositions,
  selectedStock,
  stockData,
  handleAddStock,
}) => {
  console.log(userPositions);

  return (
    <section className="portfolio-page">
      <h2 className="portfolio-page__title">Portfolio</h2>
      <AddPositions
        stockData={stockData}
        handleAddStock={handleAddStock}
        selectedStock={selectedStock}
      />
      <section className="positions">
        <h3 className="positions__title">Current Positions</h3>
        {userPositions.map((positions, i) => (
          <CurrentPositions key={positions.id} positions={positions} />
        ))}
      </section>
    </section>
  );
};

export default PortfolioPage;
