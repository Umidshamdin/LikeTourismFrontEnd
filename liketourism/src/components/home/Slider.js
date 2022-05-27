import React from "react";
import "../../assets/sass/home/slider.scss";
function Slider() {
  return (
    <div className="slider">
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner exam">
          <div className="carousel-item active">
            <img
              src={require("../../assets/img/home/pramida.jpg")}
              className="d-block images"
              alt="sk"
            />
            <h1>Məhşur səyahət yerləri kəşf et</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/* <button className="btn btn-primary">Rezerve et</button> */}
          </div>
          <div className="carousel-item">
            <img
              src={require("../../assets/img/home/12-2-Iguazu.jpg")}
              className="d-block images "
              alt="sk"
            />{" "}
            <h1>Məhşur səyahət yerləri kəşf et</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quod.
            </p>
            <button className="btn btn-primary">Rezerve et</button>
          </div>
          <div className="carousel-item">
            <img
              src={require("../../assets/img/home/nemrut-dagi-3.jpg")}
              className="d-block images"
              alt="sk"
            />{" "}
            <h1>Məhşur səyahət yerləri kəşf et</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quod.
            </p>
            <button className="btn btn-primary">Rezerve et</button>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
