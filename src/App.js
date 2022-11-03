import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api_url_stocks from "./utilities/api";
import { getPositions } from "./utilities/api";

import axios from "axios";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import DcaPage from "./pages/DcaPage/DcaPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MorePage from "./pages/MorePage/MorePage";
import Loader from "./components/Loader/Loader";

import "./App.scss";

function App() {
  const [stockData, setStockData] = useState([]);
  const [userPositions, setUserPositions] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(null);
  const [loading, setLoading] = useState(false);

  // Todo: Make dynamic via firebase
  let userId = 1;

  const handleAddStock = (e, searchTerm) => {
    e.preventDefault();

    const searchedStock = stockData.find((stock) => {
      return stock.symbol === `${searchTerm}`;
    });
    setSelectedStock(searchedStock);
  };

  // const getStockData = async () => {
  //   const { data } = await axios.get(api_url_stocks);
  //   setStockData(data);
  // };

  const getUserPositions = async () => {
    try {
      const { data: firstData } = await getPositions(userId);
      setUserPositions(firstData);
    } catch (err) {
      console.log(err);
    }
  };

  const populateState = async () => {
    setLoading(true);

    // Disabled temporarily to prevent running out of API credits
    // const stockData = await axios.get(api_url_stocks);

    // Enabled temporarily to simulate hitting the real API
    const stockData = await axios.get("http://localhost:8084/test-data");

    setLoading(false);

    let positionData = await getPositions(userId);
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

  // When the user closes the modal, get fresh data
  useEffect(() => {
    if (isOpen === false) {
      populateState();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isEditOpen === false) {
      populateState();
    }
  }, [isEditOpen]);

  useEffect(() => {
    // getStockData();
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
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route
              path="/:userId/positions/all"
              element={
                <PortfolioPage
                  userPositions={userPositions}
                  handleAddStock={handleAddStock}
                  selectedStock={selectedStock}
                  stockData={stockData}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  isEditOpen={isEditOpen}
                  setIsEditOpen={setIsEditOpen}
                  loading={loading}
                />
              }
            ></Route>
            <Route
              path="/:userId/dca/all"
              element={<DcaPage userPositions={userPositions} />}
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/more" element={<MorePage />}></Route>
          </Routes>
        </main>
        <Footer userId={userId} />
      </BrowserRouter>
    </>
  );
}

export default App;
