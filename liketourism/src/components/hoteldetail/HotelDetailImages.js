import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/sass/hoteldetail/imagegallery.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

import ImageGallery from "react-image-gallery";
function HotelDetailImages() {
  const { id } = useParams();
  const [images, setImages] = useState([]);

  const loadSlider = async () => {
    const result = await axios.get(
      `https://localhost:44363/api/HotelListImages/GetAll/${id}`
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

    // <div>
    //   <div className="container">
    //     <div className="row mt-5">
    //       <div className="col-8">
    //         <ImageGallery items={images} />
    //       </div>
    //       <div className="col-4">
    //         <div className="hotelDesc">
    //           <div className="iconStar">
    //             <p>
    //               <i class="fas fa-star"></i>
    //             </p>
    //             <p>
    //               <i class="fas fa-star"></i>
    //             </p>
    //             <p>
    //               <i class="fas fa-star"></i>
    //             </p>
    //             <p>
    //               <i class="fas fa-star"></i>
    //             </p>
    //             <p>
    //               <i class="fas fa-star"></i>
    //             </p>
    //           </div>
    //           <h4>Baku Marriott Hotel Boulevard</h4>

    //           <p>
    //             {" "}
    //             Xaqani Rustamov Street 4C, Baku White City , AZ1052 Bakü,
    //             Azerbaycan –
    //           </p>

    //           <div className="infos">
    //             <div className="infodetail">
    //             <i className="fas fa-bed"></i>
    //               <span>	Harika bir gece uykusu çekmek ister misiniz? Bu otel konforlu yatakları için yüksek puan aldı.</span>
    //               <p><i className="fas fa-parking"></i>  	Tesis bünyesinde ücretsiz özel otopark mevcut</p>

    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HotelDetailImages;
