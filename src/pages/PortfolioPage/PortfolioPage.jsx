import { useState, useEffect } from "react";
import axios from "axios";
import api_url_stocks from "../../utilities/api";
import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import Loader from "../../components/Loader/Loader";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  const [stockData, setStockData] = useState([]);

  const getStockData = async () => {
    const { data } = await axios.get(api_url_stocks);
    setStockData(data);
  };

  useEffect(() => {
    getStockData();
  }, []);

  if (!stockData) {
    return <Loader />;
  }

  return (
    <section className="portfolio-page">
      <h2 className="portfolio-page__title">Portfolio</h2>
      <AddPositions stockData={stockData} />
      <CurrentPositions stockData={stockData} />
    </section>
  );
};

export default PortfolioPage;
