import React from 'react'
import "../assets/sass/info.scss";

function Info() {
  return (
    <div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
          <h2>Yaninizda biz variz</h2>
          <i class="fas fa-cannabis"></i>
          <span>En iyi turistik noktaları keşfedin</span>
          <p>
            Turistik noktalar, turlar, aktiviteler ve daha fazlasıyla seyahat
            noktanızın en iyi yönlerini deneyimleyin
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
          <i class="fas fa-cannabis mt-5"></i>
          <span>Hızlı ve esnek</span>
          <p>
            Çoğu turistik noktada ücretsiz iptal avantajıyla biletlerinizi
            dakikalar içinde online olarak rezerve edin
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
          <i class="fas fa-cannabis mt-5"></i>
          <span>En iyi turistik noktaları keşfedin</span>
          <p>
            Booking.com'un küresel Müşteri Hizmetleri ekibi 7/24 yardımcı
            olmak için yanınızda
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info