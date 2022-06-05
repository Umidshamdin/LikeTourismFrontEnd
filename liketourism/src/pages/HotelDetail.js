import React from "react";
import HotelDetailImages from "../components/hoteldetail/HotelDetailImages";
import Accordions from "../components/hoteldetail/Accordions";
import HotelDescription from "../components/hoteldetail/HotelDescription";
import Reservation from "../components/hoteldetail/Reservation";


function HotelDetail() {
  return (
    <div>
      <HotelDetailImages></HotelDetailImages>

      <HotelDescription></HotelDescription>
      <Accordions></Accordions>
     
        <Reservation></Reservation>
      
    </div>
  );
}

export default HotelDetail;
