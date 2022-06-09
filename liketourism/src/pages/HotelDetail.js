import React from "react";
import HotelDetailImages from "../components/hoteldetail/HotelDetailImages";
import Accordions from "../components/hoteldetail/Accordions";
import HotelDescription from "../components/hoteldetail/HotelDescription";
import Rooms from "../components/hoteldetail/Rooms";


function HotelDetail() {
  return (
    <div>
      <HotelDetailImages></HotelDetailImages>

      <HotelDescription></HotelDescription>
      <Accordions></Accordions>
      <Rooms></Rooms>
    
      
    </div>
  );
}

export default HotelDetail;
