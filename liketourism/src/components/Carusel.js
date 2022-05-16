import React, { Component } from "react";
import Slider from "react-slick";
import "../assets/sass/carusel.scss";

export default class Responsive extends Component {
  render() {
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
          <div className="row">
            <Slider {...settings}>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                  <p>oteller</p>
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                  <p>oteller</p>
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                  <p>oteller</p>
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                </h3>
              </div>
              <div className="px-1">
                <h3>
                  <img
                    style={{ width: "80%", height: "230px" }}
                    src={require("../assets/img/home/slider1.jpg")}
                    alt="sk"
                  />
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
