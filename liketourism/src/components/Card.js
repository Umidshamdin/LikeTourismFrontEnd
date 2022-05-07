import React from "react";
import "../assets/sass/card.scss";

function Card() {
  return (
    <section id="cards">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 exam">
            <img
              src={require("../assets/img/home/baki.webp")}
              alt=""
            />
            <a href="">
              <h3>
                <b>Bakı</b>
              </h3>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 exam">
          <img
              src={require("../assets/img/home/afina.jpg")}
              alt=""
            />
            <h3>
              <b>Afina</b>
            </h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
          <img
              src={require("../assets/img/home/sofya.jpg")}
              alt=""
            />
            <h3>
              <b>Sofya</b>
            </h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
          <img
              src={require("../assets/img/home/budapest.avif")}
              alt=""
            />
            <h3>
              <b>Bükreş</b>
            </h3>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
          <img
              src={require("../assets/img/home/bukres.webp")}
              alt=""
            />            <h3>
              <b>Budapeşte</b>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
