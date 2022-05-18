import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/card.scss";

function Card() {
  return (
    <section id="famous-cities">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 cards">
            <Link className="link" to={"/citydetail"}>
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
              <b>Bakı</b>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 cards">
            <Link className="link" to={"/citydetail"}>
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
              <b>Bakı</b>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 cards">
            <Link className="link" to={"/citydetail"}>
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
              <b>Bakı</b>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 cards">
            <Link className="link" to={"/citydetail"}>
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
              <b>Bakı</b>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 cards">
            <Link className="link" to={"/citydetail"}>
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
              <b>Bakı</b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
