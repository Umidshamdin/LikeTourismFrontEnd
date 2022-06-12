import React from "react";
import HotelDetailImages from "../components/hoteldetail/HotelDetailImages";
import Accordions from "../components/hoteldetail/Accordions";
import HotelDescription from "../components/hoteldetail/HotelDescription";
import Rooms from "../components/hoteldetail/Rooms";
import Rooms2 from "../components/hoteldetail/Rooms2";


function HotelDetail() {
  return (
    <div>
      <HotelDetailImages></HotelDetailImages>

      <HotelDescription></HotelDescription>
      <Accordions></Accordions>
     <Rooms2></Rooms2>

      
      
    </div>
  );
}

export default HotelDetail;
