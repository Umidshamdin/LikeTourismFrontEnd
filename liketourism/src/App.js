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
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import { useState } from "react";
import ChangePassword from "./pages/ChangePassword";
import HouseDetail from "./pages/HouseDetail";

function App() {
  const [render, setRender] = useState();

  return (
    <div>
      <Router>
        <div>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/Hotels/:id" element={<Hotels />} />
            <Route path="/HotelDetail/:id" element={<HotelDetail />} />
            <Route path="/HouseDetail/:id" element={<HouseDetail />} />

            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword/:email/*" element={<ResetPassword />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />


            <Route path="/Register" element={<Register render={setRender} />} />
          </Routes>

          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
