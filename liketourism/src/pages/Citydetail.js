import React from "react";
import "../assets/sass/citydetail/citydetail.scss";
import SearchBar from "../components/SearchBar";
import BookData from '../Data.json'
function Citydetail() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SearchBar data={BookData} placeholder={"Enter"}></SearchBar>
          </div>
          <div className="col-9">
            <h3>Bakı : 13 müəssisə tapildi</h3>
            <div className="info">
              <img
                src={require("../assets/img/citydetail/HappyInnHotel.webp")}
                alt="sk"
              />

              <div className="star">
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
              </div>
              <h4>Happy Inn Hotel</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Citydetail;
