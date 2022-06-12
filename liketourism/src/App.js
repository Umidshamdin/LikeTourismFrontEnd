import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tours from "./pages/Tours";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HotelDetail from "./pages/HotelDetail";
import Hotels from "./pages/Hotels";
import Reservation from "./pages/Reservation";

function App() {


  return (
    <div>
      <Router>
        <div>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/Hotels/:id" element={<Hotels />} />
            <Route path="/HotelDetail" element={<HotelDetail />} />
            <Route path="/Reservation" element={<Reservation />} />

          </Routes>

          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
