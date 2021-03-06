import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/sass/home/categorycarusel.scss";
function CategoryCarusel() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    loadHouse();
  }, []);

  async function loadHouse() {
    const result = await axios.get(`https://localhost:44363/api/Category/GetAll`);

    setCategory(result.data);
  }

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,

    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      <div className="row mt-5 exams">
        <h2>Müəssisə tipinə görə seçim edin</h2>
        <Slider {...settings}>
          {category.map((categories) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 hous"
              key={categories.id.toString()}
            >
              <div className="homeItem px-1">
                <img
                  className="homeImgs"
                  src={`data:image/jpeg;base64,${categories.image}`}
                  alt=""
                />
                <span className="homeName">
                  <Link className="linkhome" to={"/hotels"}>
                    {categories.name}
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CategoryCarusel;
