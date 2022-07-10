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
  let desc ;
  if(descrip[0] != null){
    desc = descrip?.map((descs) => (
      <div className="row mt-5">
        <div className="col-6">
          <p>
            {/* */}
            {descs?.longDesc}
          </p>
        </div>
        <div className="col-6">
          <div className="hotelInfos">
            <i class="fas fa-coffee cof">{descs?.breakfast}</i>

            
            <i class="fas fa-coffee">Səhər yeməyi növü:{descs?.breakfastType}</i>
            

            <i className="fas fa-parking">{descs?.parking} </i>
           

            <i class="fas fa-paw">{descs?.animal}</i>

            <i class="fas fa-user">{descs?.checkIn}</i>
          </div>
        </div>
      </div>
    ))
  }else{
    desc = <div></div>
  }
  
  return (
    <div className="container">
      {desc}
    </div>
  );
}

export default HotelDescription;
