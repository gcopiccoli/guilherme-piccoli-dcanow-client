import { useState } from "react";
import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import EditModal from "../../components/EditModal/EditModal";
import Loader from "../../components/Loader/Loader";
import "./PortfolioPage.scss";
import { useParams } from "react-router-dom";

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
  populateState,
}) => {
  const [positionToDelete, setPositionToDelete] = useState({});
  const [positionToEdit, setPositionToEdit] = useState({});

  let { userId } = useParams();

  // Todo: Make dynamic via firebase
  // let { userId } = useParams();

  return (
    <section className="portfolio-page">
      <h2 className="portfolio-page__title">Portfolio</h2>
      <AddPositions
        userId={userId}
        stockData={stockData}
        handleAddStock={handleAddStock}
        selectedStock={selectedStock}
        populateState={populateState}
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
