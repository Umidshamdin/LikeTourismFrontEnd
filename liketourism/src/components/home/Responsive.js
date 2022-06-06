import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../assets/sass/carusel.scss";
function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,

    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <h2>Bəyənilən evlər</h2>
          <h4>secin</h4>
          <Slider {...settings}>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="homeItem px-1">
                <img
                  className="homeImg"
                  src={require("../../assets/img/home/afina.jpg")}
                  alt=""
                />
                <span className="homeName">
                  <Link className="linkhome" to={"/citydetail"}>
                    Apart Hotel
                  </Link>
                </span>
                <span className="cityName">Madrid</span>
                <span className="roomPrise">Staeting from $130</span>
                <div className="rating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="homeItem px-1">
                <img
                  className="homeImg"
                  src={require("../../assets/img/home/afina.jpg")}
                  alt=""
                />
                <span className="homeName">
                  <Link className="linkhome" to={"/citydetail"}>
                    Apart Hotel
                  </Link>
                </span>
                <span className="cityName">Madrid</span>
                <span className="roomPrise">Staeting from $130</span>
                <div className="rating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
         
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Responsive;
