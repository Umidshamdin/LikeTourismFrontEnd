import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/sass/home/slider.scss";
function Slider({props}) {
  const [slider, setSliders] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    loadSliders();
  }, []);

  async function loadSliders() {
    await axios.get(`https://localhost:44363/api/Slider/GetAll`).then((res) => {
      const result = res.data;
      setSliders(result);
    });
  }
  return (
    <div className="slider">
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner exam">
          {slider.map((slide, i) => (
            <div
              key={i}
              active={i === 0}
              className={"carousel item" + this.props.active ? " active" : ""}
              data-interval="8000"
            >
              <img
                src={`data:image/jpeg;base64,${slide.image}`}
                className="d-block images"
                alt="sk"
              />
              <h1>{slide.name}</h1>
              <p>{slide.desc}</p>
              <button className="btn btn-primary">Rezerve et</button>
            </div>
          ))}

          {/* <div className="carousel-item">
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
          </div> */}
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
