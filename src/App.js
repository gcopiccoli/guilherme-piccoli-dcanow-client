import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import api_url_stocks, { getUserByEmail } from "./utilities/api";
import { getPositions, getUser } from "./utilities/api";
import { UserAuth } from "./context/AuthContext";

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
import LandingPage from "./pages/LandingPage/LandingPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [stockData, setStockData] = useState([]);
  const [userPositions, setUserPositions] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userIdFromDB, setUserIdFromDb] = useState(0);
  const { user } = UserAuth();

  const handleAddStock = (e, searchTerm) => {
    e.preventDefault();

    const searchedStock = stockData.find((stock) => {
      return stock.symbol === `${searchTerm}`;
    });
    setSelectedStock(searchedStock);
  };

  const getUserPositions = async () => {
    try {
      const { data: userFromDb } = await getUserByEmail(user.email);
      const { data: positions } = await getPositions(userFromDb.id);
      const sortedPositions = positions.sort((a, b) =>
        b.updated_at < a.updated_at ? 1 : -1
      );
      setUserPositions(sortedPositions);
    } catch (err) {
      console.log(err);
    }
  };

  const populateState = async () => {
    setLoading(true);

    // Disabled temporarily to prevent running out of API credits
    const stockData = await axios.get(api_url_stocks);

    // Enabled temporarily to simulate hitting the real API
    // const stockData = await axios.get("http://localhost:8084/test-data");

    const { data: userFromDb } = await getUserByEmail(user.email);

    setUserIdFromDb(userFromDb.id);
    setLoading(false);

    let positionData = await getPositions(userFromDb.id);
    stockData.data.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
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
    if (user) {
      getUserPositions();
      populateState();
    } else {
      setUserPositions([]);
    }
  }, [user]);

  if (!stockData) {
    return <Loader />;
  }

  if (!userPositions) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Header setUserIdFromDb={setUserIdFromDb} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/land" element={<LandingPage />}></Route>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route
              path="/home"
              element={<HomePage userId={userIdFromDB} />}
            ></Route>
            <Route
              path="/:userId/positions/all"
              element={
                <PortfolioPage
                  userPositions={userPositions}
                  handleAddStock={handleAddStock}
                  selectedStock={selectedStock}
                  setSelectedStock={setSelectedStock}
                  stockData={stockData}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  isEditOpen={isEditOpen}
                  setIsEditOpen={setIsEditOpen}
                  loading={loading}
                  populateState={populateState}
                />
              }
            ></Route>
            <Route
              path="/:userId/dca/all"
              element={<DcaPage userPositions={userPositions} />}
            ></Route>
            <Route path="/learn" element={<AboutPage />}></Route>
            <Route path="/more" element={<MorePage />}></Route>
          </Routes>
        </main>
        <Footer userId={userIdFromDB} />
      </BrowserRouter>
    </>
  );
}

export default App;
