import React from "react";
import HotelList from "../components/cityhotels/HotelList";
import HotelSearch from "../components/cityhotels/HotelSearch";



function CityHotels() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <HotelSearch></HotelSearch>
          </div>
          <div className="col-8">
            <HotelList></HotelList>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityHotels;
