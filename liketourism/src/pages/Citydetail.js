import React from "react";
import HotelList from "../components/citydetail/HotelList";



function Citydetail() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-8">
            <HotelList></HotelList>
          </div>
        </div>
      </div>
    </>
  );
}

export default Citydetail;
