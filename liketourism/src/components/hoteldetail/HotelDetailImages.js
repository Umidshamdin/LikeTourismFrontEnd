import React from "react";
import "../../assets/sass/hoteldetail/imagegallery.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
function HotelDetailImages() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-8">
            <ImageGallery items={images} />
          </div>
          <div className="col-4">
            <div className="hotelDesc">
              <div className="iconStar">
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  <i class="fas fa-star"></i>
                </p>
              </div>
              <h4>Baku Marriott Hotel Boulevard</h4>

              <p>
                {" "}
                Xaqani Rustamov Street 4C, Baku White City , AZ1052 Bakü,
                Azerbaycan –
              </p>

              <div className="infos">
                <div className="infodetail">
                <i class="fas fa-bed"></i>
                  <span>	Harika bir gece uykusu çekmek ister misiniz? Bu otel konforlu yatakları için yüksek puan aldı.</span>
                  <p><i class="fas fa-parking"></i>  	Tesis bünyesinde ücretsiz özel otopark mevcut</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailImages;
