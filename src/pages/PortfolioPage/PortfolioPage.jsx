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
  // const [rerender, setRerender] = useState(false);

  const { userId } = useParams();

  const getStockData = async () => {
    const { data } = await axios.get(api_url_stocks);
    setStockData(data);
    console.log(stockData[1].name);
  };

  const getUserPositions = async () => {
    try {
      const { firstData } = await getPositions(userId);
      setUserPositions(firstData);

      const { secondData } = await axios.get(`http://localhost:8084/${userId}`);
      setUserPositions(secondData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStockData();
  }, []);

  useEffect(() => {
    getUserPositions();
  }, [userId]); //remove rerender

  if (!stockData) {
    return <Loader />;
  }

  if (!userPositions) {
    return <Loader />;
  }

  return (
    <section className="portfolio-page">
      <h2 className="portfolio-page__title">Portfolio</h2>
      <AddPositions stockData={stockData} />
      {userPositions.map((positions) => (
        <CurrentPositions
          key={positions.id}
          positions={positions}
          stockData={stockData}
          // setRerender={() => setRerender(!rerender)}
        />
      ))}
    </section>
  );
};

export default PortfolioPage;
