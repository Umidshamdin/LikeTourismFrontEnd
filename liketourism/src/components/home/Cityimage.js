import React from "react";
import "../../assets/sass/home/cityimage.scss";

function Cityimage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="cityimage">
            <div className="cityitem">
              <img className="cityimg" src={require("../../assets/img/home/afina.jpg")} alt="" />
              <div className="citytitle">
                <h1>Dublin</h1>
                <h2>123 property</h2>
              </div>
            </div>
            <div className="cityitem">
              <img className="cityimg"  src={require("../../assets/img/home/afina.jpg")} alt="" />
              <div className="citytitle">
                <h1>Dublin</h1>
                <h2>123 property</h2>
              </div>
            </div>
            <div className="cityitem">
              <img className="cityimg"  src={require("../../assets/img/home/afina.jpg")} alt="" />
              <div className="citytitle">
                <h1>Dublin</h1>
                <h2>123 property</h2>
              </div>
            </div>

            <div className="cityitem">
              <img className="cityimg"  src={require("../../assets/img/home/afina.jpg")} alt="" />
              <div className="citytitle">
                <h1>Dublin</h1>
                <h2>123 property</h2>
              </div>
            </div>

            <div className="cityitem">
              <img className="cityimg"  src={require("../../assets/img/home/afina.jpg")} alt="" />
              <div className="citytitle">
                <h1>Dublin</h1>
                <h2>123 property</h2>
              </div>
            </div>

            <div className="cityitem">
              <img className="cityimg"  src={require("../../assets/img/home/afina.jpg")} alt="" />
              <div className="citytitle">
                <h1>Dublin</h1>
                <h2>123 property</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cityimage;
