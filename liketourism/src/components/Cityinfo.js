import React from "react";
import "../assets/sass/citydetail/cityinfo.scss";

function Cityinfo() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9 desc">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className="cityimage"
                src={require("../assets/img/home/sofya.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5>Baku Marriott Hotel Boulevard</h5>
              <p>
                Spa ve sağlıklı yaşam merkezi sunan Baku Marriott Hotel
                Boulevard, Hazar Denizi kıyısına 5 dakikalık yürüme
                mesafesindedir. Tüm alanlarda WiFi ücretsizdir.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <button className="btn btn-primary">Rezervasiya et</button>
            </div>
          </div>

          {/* <div className="col-4 cityinfo">
            <div class="card">
            <img
              className="cityimage"
              src={require("../assets/img/home/sofya.jpg")}
              alt=""
            />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cityinfo;
