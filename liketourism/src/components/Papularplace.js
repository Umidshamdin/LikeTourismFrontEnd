import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/papularplace.scss";
// import  Link  from "react-router-dom";
function Papularplace() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <h3>Məhşur səyahət yerləri</h3>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam ">
            <img src={require("../assets/img/tours/dubay.jpg")} alt="" />
            <p>
              <b>
                <Link className="link" to={'/'}>Dubay</Link>
              </b>
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
            <img src={require("../assets/img/tours/london.jpg")} alt="" />
            <p>
                
              <b>
              <Link className="link" to={'/'}>London</Link>

              </b>
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
            <img src={require("../assets/img/tours/istanbul.jpg")} alt="" />
            <p>
               
              <b>
              <Link className="link" to={'/'}>Istanbul</Link>

              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Papularplace;
