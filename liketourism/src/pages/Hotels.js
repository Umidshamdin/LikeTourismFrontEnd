
import React from "react";
import HotelList from "../components/hotels/HotelList";
import HotelSearch from "../components/hotels/HotelSearch";




function Hotels() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <HotelSearch></HotelSearch>
          </div>
          <div className="col-8">
            
            <HotelList/>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotels;
