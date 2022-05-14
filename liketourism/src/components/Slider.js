import React from "react";
import "../assets/sass/slider.scss";
function Slider() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner exam">
          <div class="carousel-item active">
            <img
              src={require("../assets/img/home/slider1.jpg")}
              className="d-block w-100"
              alt="sk"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/img/home/slider2.webp")}
              className="d-block w-100"
              alt="sk"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/img/home/slider3.avif")}
              className="d-block w-100"
              alt="sk"
            />{" "}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
