import React from 'react'
import "../assets/sass/citydetail/cityinfo.scss";

function Cityinfo() {
  return (
    <div>
        <div className="row">
            <div className="col-4 images">
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
              

            </div>
            <div className="col-4 images">
              <img src={require("../assets/img/home/sofya.jpg")} alt="" />
            </div>
           

        </div>
    </div>
  )
}

export default Cityinfo