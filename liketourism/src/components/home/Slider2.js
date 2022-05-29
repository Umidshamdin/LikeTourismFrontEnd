import React, { useState, useEffect } from "react";
import axios from "axios";

function Slider2() {
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

  console.log( this.props.active )
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {slider.map((slide, i) => (
          <div
            key={i}
            active={i === 0}
            
            data-interval="8000"
          >
            <img src={slide.url} className="d-block w-100" alt={slide.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="">{slide.title}</h5>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider2;
