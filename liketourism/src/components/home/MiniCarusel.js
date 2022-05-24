import React from "react";
import Slider from "react-slick";
import "../../assets/sass/home/minicarusel.scss";
function MiniCarusel() {
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
    <>
      <div className="container mt-5">
        <div className="row">
          <Slider {...settings}>
            <div className="col-lg-2 col-md-3 col-sm-6 mini">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
              <h4>Oteller</h4>
              <p>313 otel</p>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <img
                className="miniimg"
                src={require("../../assets/img/home/afina.jpg")}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MiniCarusel;
