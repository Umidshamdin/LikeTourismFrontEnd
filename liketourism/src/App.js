import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tours from "./pages/Tours";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Citydetail from "./pages/Citydetail";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/Citydetail" element={<Citydetail />} />
          </Routes>

          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
