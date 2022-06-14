import React from "react";
import HotelDetailImages from "./HotelDetailImages";
import axios from "axios";

function HotelImages() {
  let fullImgs = [];

  async function loadRoom(id) {
    fullImgs.length = 0;
    await axios
      .get(`https://localhost:44363/api/Reservation/GetById/${id}`)
      .then((res) => {
        res.data.roomImages.forEach((image) => {
          let data = "data:image/jpeg;base64,";
          let fullImg = data + image.image;
          let obj = {
            original: fullImg,
            thumbnail: fullImg,
          };

          fullImgs.push(obj);
        });
      });
  }
  return (
    <div>
      <HotelDetailImages>
        autoPlay={true}
        showThumbnails={false}
        showPlayButton={false}
        itemss={fullImgs}
      </HotelDetailImages>
    </div>
  );
}

export default HotelImages;
