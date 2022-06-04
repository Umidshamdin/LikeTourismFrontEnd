import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "../assets/sass/carusel.scss";
function Carusel() {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    loadHouse();
  }, []);

  async function loadHouse() {
    const result = await axios.get(`https://localhost:44363/api/House/GetAll`);

    setHouse(result.data);
  }

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,

    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: true,
    autoplay: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <Slider {...settings}>
          {house.map((hous) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 hous"
              key={hous.id.toString()}
            >
              <div className="homeItem px-1">
                <img
                  className="homeImg"
                  src={`data:image/jpeg;base64,${hous.image}`}
                  alt=""
                />
                <span className="homeName">
                  <Link className="linkhome" to={"/citydetail"}>
                    {hous.name}
                  </Link>
                </span>
                <span className="cityName">{hous.famousCity.name}</span>
                <span className="roomPrise">{hous.prise}</span>
                <div className="rating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carusel;
