import React from "react";
import HotelDetailImages from "../components/hoteldetail/HotelDetailImages";
import Accordions from "../components/hoteldetail/Accordions";
import HotelDescription from "../components/hoteldetail/HotelDescription";
import Rooms from "../components/hoteldetail/Rooms";
import Rooms2 from "../components/hoteldetail/Rooms2";
import HotelImages from "../components/hoteldetail/HotelImages";
import RoomDetailCarusel from "../components/hoteldetail/RoomDetailCarusel";


function HotelDetail() {
  return (
    <div>
      <HotelDetailImages></HotelDetailImages>

      <HotelDescription></HotelDescription>
     
     <Rooms2></Rooms2>

      
      
    </div>
  );
}

export default HotelDetail;
