import { useState } from "react";
import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import EditModal from "../../components/EditModal/EditModal";
import Loader from "../../components/Loader/Loader";
import "./PortfolioPage.scss";

const PortfolioPage = ({
  userPositions,
  selectedStock,
  stockData,
  handleAddStock,
  isOpen,
  setIsOpen,
  isEditOpen,
  setIsEditOpen,
  loading,
  getUserPositions,
}) => {
  const [positionToDelete, setPositionToDelete] = useState({});
  const [positionToEdit, setPositionToEdit] = useState({});

  return (
    <section className="portfolio-page">
      <h2 className="portfolio-page__title">Portfolio</h2>
      <AddPositions
        stockData={stockData}
        handleAddStock={handleAddStock}
        selectedStock={selectedStock}
        getUserPositions={getUserPositions}
      />
      <section className="positions">
        <h3 className="positions__title">Current Positions</h3>
        {loading && <Loader />}
        {!loading &&
          userPositions.map((positions, i) => (
            <CurrentPositions
              key={positions.id}
              positions={positions}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isEditOpen={isEditOpen}
              setIsEditOpen={setIsEditOpen}
              setPositionToDelete={setPositionToDelete}
              setPositionToEdit={setPositionToEdit}
            />
          ))}
      </section>
      <EditModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        positionToEdit={positionToEdit}
      />

      <DeleteModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        positionToDelete={positionToDelete}
      />
    </section>
  );
};

export default PortfolioPage;
