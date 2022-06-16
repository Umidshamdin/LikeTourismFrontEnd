import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/sass/hoteldetail/hoteldescription.scss";
function HotelDescription() {
  const { id } = useParams();
  const [descrip, setDescrip] = useState([]);
  useEffect(() => {
    loadSliders();
  }, []);
  const loadSliders = async () => {
    const result = await axios.get(
      `https://localhost:44363/api/HotelList/GetById/${id}`
    );
    setDescrip(result.data.hotelDescriptions);
  };
  return (
    <div className="container">
      {descrip.map((descs) => (
        <div className="row">
          <div className="col-6">
            <p>
              {/* */}
      {descs.longDesc}
            </p>
          </div>
          <div className="col-6">
            <div className="hotelInfos">
              <i class="fas fa-coffee"> Seher yemeyi qiymete daxildir</i>

              <p>
                <b>Seher yemeyi novleri:Kondinental,Aciq bufe</b>
              </p>

              <i className="fas fa-parking">{descs.parking}giz </i>
              <i className="fas fa-utensils">
                {" "}
                Tesis bünyesinde 1 restoran var
              </i>

              <i class="fas fa-paw"> Evcil hayvan giremez. </i>

              <i class="fas fa-user">Check-in için minimum yaş sınırı yok</i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelDescription;
