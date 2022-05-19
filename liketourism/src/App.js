import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tours from "./pages/Tours";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar2></Navbar2>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tours" element={<Tours />} />
          </Routes>

          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
