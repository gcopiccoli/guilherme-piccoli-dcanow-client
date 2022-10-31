import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import DcaPage from "./pages/DcaPage/DcaPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MorePage from "./pages/MorePage/MorePage";

import "./App.scss";

function App() {
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
              element={<PortfolioPage />}
            ></Route>
            <Route path="/:userId/dca/all" element={<DcaPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/more" element={<MorePage />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
