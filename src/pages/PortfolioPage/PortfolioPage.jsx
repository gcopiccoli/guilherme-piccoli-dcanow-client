import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api_url_stocks from "../../utilities/api";
import { getPositions } from "../../utilities/api";
import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import Loader from "../../components/Loader/Loader";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  const [stockData, setStockData] = useState([]);
  const [userPositions, setUserPositions] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const { userId } = useParams();

  const handleAddStock = (e, searchTerm) => {
    e.preventDefault();
    console.log(searchTerm);

    const searchedStock = stockData.find((stock) => {
      return stock.symbol === `${searchTerm}`;
    });
    console.log(stockData);
    setSelectedStock(searchedStock);
  };

  const getStockData = async () => {
    const { data } = await axios.get(api_url_stocks);
    setStockData(data);
  };

  const getUserPositions = async () => {
    try {
      const { data: firstData } = await getPositions(userId);
      setUserPositions(firstData);
    } catch (err) {
      console.log(err);
    }
  };

  const populateState = async () => {
    const stockData = await axios.get(api_url_stocks);
    let positionData = await getPositions(userId);
    console.log(stockData);
    console.log(positionData);
    setStockData(stockData.data);
    const combinedData = positionData.data.map((position) => {
      let stockName = null;
      let stockPrice = null;
      stockData.data.forEach((stock) => {
        if (stock.symbol === position.stock_symbol) {
          stockName = stock.name;
          stockPrice = stock.price;
        }
      });
      const combinedStockData = {
        id: position.id,
        stock_symbol: position.stock_symbol,
        stock_rank: position.stock_rank,
        initial_value_invested: position.initial_value_invested,
        quantity: position.quantity,
        average_price: position.average_price,

        name: stockName,
        price: stockPrice,
      };
      return combinedStockData;
    });
    setUserPositions(combinedData);
  };

  useEffect(() => {
    getStockData();
    getUserPositions();
    populateState();
  }, []);

  useEffect(() => {
    getUserPositions();
  }, [userId]);

  if (!stockData) {
    return <Loader />;
  }

  if (!userPositions) {
    return <Loader />;
  }

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
