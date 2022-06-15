import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function HotelDescription() {

  const [hotel, setHotels] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Update the document title using the browser API
    loadHotels();
  }, []);

  async function loadHotels(id) {
    await axios
      .get(`https://localhost:44363/api/HotelList/GetAll/${id}`)
      .then((res) => {
        const result = res.data;
        setHotels(result);


      });
  }
  
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-7">
          {hotel.map((hotelss)=>(
             <p>
             {hotelss.desc}
           </p>
          ))

          }
          
        </div>
      </div>
    </div>
  );
}

export default HotelDescription;
