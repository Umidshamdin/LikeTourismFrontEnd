
import React from "react";
import HotelDetailImages from "../components/hoteldetail/HotelDetailImages";
import Accordions from "../components/hoteldetail/Accordions";
import HotelDescription from "../components/hoteldetail/HotelDescription";



function HotelDetail() {
  return (
    <div>
     <HotelDetailImages></HotelDetailImages>

     <HotelDescription></HotelDescription>
     <Accordions></Accordions>
    </div>
  );
}

export default HotelDetail;
