import React from "react";
import "../../assets/sass/home/belovedhomes.scss";
function BelovedHomes() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="homeItem">
            <img
              className="homeImg"
              src={require("../../assets/img/home/afina.jpg")}
              alt=""
            />
            <span className="homeName">Apart Hotel</span>
            <span className="cityName">Madrid</span>
            <span className="roomPrise">Staeting from $130</span>
            <div className="rating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="homeItem">
            <img
              className="homeImg"
              src={require("../../assets/img/home/afina.jpg")}
              alt=""
            />
            <span className="homeName">Apart Hotel</span>
            <span className="cityName">Madrid</span>
            <span className="roomPrise">Staeting from $130</span>
            <div className="rating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="homeItem">
            <img
              className="homeImg"
              src={require("../../assets/img/home/afina.jpg")}
              alt=""
            />
            <span className="homeName">Apart Hotel</span>
            <span className="cityName">Madrid</span>
            <span className="roomPrise">Staeting from $130</span>
            <div className="rating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="homeItem">
            <img
              className="homeImg"
              src={require("../../assets/img/home/afina.jpg")}
              alt=""
            />
            <span className="homeName">Apart Hotel</span>
            <span className="cityName">Madrid</span>
            <span className="roomPrise">Staeting from $130</span>
            <div className="rating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BelovedHomes;
