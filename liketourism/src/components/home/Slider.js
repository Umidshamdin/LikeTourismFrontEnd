import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../assets/sass/home/slider.scss";
import axios from "axios";
function Slider() {
  const [slider, setSliders] = useState([]);

  useEffect(() => {
    loadSliders();
  }, []);

  async function loadSliders() {
    await axios.get(`https://localhost:44363/api/Slider/GetAll`).then((res) => {
      const result = res.data;
      setSliders(result);
    });
  }
 
  return (
    <div>
      <Carousel>
        {slider.map((slide,i) => (
          <div key={i}>
            <img
              className="headerslider"
              src={`data:image/jpeg;base64,${slide.image}`}
              alt=""
            />
            {/* <h2 className="title">{slide.title}</h2>
            <p className="description">
              <b>{slide.desc}</b>
            </p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
