import { useState } from "react";
import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./PortfolioPage.scss";

const PortfolioPage = ({
  userPositions,
  selectedStock,
  stockData,
  handleAddStock,
  isOpen,
  setIsOpen,
}) => {
  const [positionToDelete, setPositionToDelete] = useState({});
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
          <CurrentPositions
            key={positions.id}
            positions={positions}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setPositionToDelete={setPositionToDelete}
          />
        ))}
      </section>
      <DeleteModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        positionToDelete={positionToDelete}
      />
    </section>
  );
};

export default PortfolioPage;
