import React from "react";
// import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import "../../assets/sass/hoteldetail/roomdetailcarusel.scss";
function RoomDetailCarusel(props) {
 
  return (
    <div>
      <ImageGallery items={props?.items} />
    </div>
  );
}

export default RoomDetailCarusel;
