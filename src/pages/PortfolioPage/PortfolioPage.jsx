import { useState } from "react";
import api_url_stocks from "../../utilities/api";
import AddPositions from "../../components/AddPositions/AddPositions";
import CurrentPositions from "../../components/CurrentPositions/CurrentPositions";
import "./PortfolioPage.scss";
import { useEffect } from "react";

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
      <AddPositions />
      <CurrentPositions />
    </section>
  );
};

export default PortfolioPage;
