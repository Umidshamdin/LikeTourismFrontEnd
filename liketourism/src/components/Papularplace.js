import React from 'react'
import "../assets/sass/papularplace.scss";

function Papularplace() {
  return (
    <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam ">
          <img src={require("../assets/img/home/afina.jpg")} alt="" />
          <p><b>Dubay</b></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
        <img src={require("../assets/img/home/afina.jpg")} alt="" />
          <p><b>London</b></p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 exam">
        <img src={require("../assets/img/home/afina.jpg")} alt="" />
          <p><b>Istanbul</b></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Papularplace