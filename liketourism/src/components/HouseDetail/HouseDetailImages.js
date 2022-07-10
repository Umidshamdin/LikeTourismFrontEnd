import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/sass/hoteldetail/imagegallery.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

import ImageGallery from "react-image-gallery";
function HouseDetailImages() {
  const { id } = useParams();
  const [images, setImages] = useState([]);

  const loadSlider = async () => {
    const result = await axios.get(
      `https://localhost:44363/api/HouseImages/GetAll/${id}`
    );
    setImages(result.data);
    
  };
  

  useEffect(() => {
    loadSlider();
  }, []);

  let fullImgs = [];

  images.forEach((image) => {
    let data = "data:image/jpeg;base64,";
    let fullImg = data + image.image;
    let obj = {
      original: fullImg,
      thumbnail: fullImg,
    };

    fullImgs.push(obj);
  });

  return (
    <div className="caruselimages mt-5">
      <ImageGallery items={fullImgs} />
    </div>
  );
}

export default HouseDetailImages;
