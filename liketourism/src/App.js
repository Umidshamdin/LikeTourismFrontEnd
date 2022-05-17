import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Citydetail from "./pages/Citydetail";
import Tours from "./pages/Tours";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar2></Navbar2>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Citydetail" element={<Citydetail />} />
            <Route path="/Tours" element={<Tours />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
