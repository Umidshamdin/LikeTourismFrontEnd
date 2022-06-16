import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../../assets/sass/hotels/hotellist.scss";
import { Link } from "react-router-dom";


function HotelList() {
  const [hotel, setHotels] = useState([]);
  const { id } = useParams();

  

  useEffect(() => {
    // Update the document title using the browser API
    loadHotels();
  }, []);

  async function loadHotels() {
    await axios
      .get(`https://localhost:44363/api/HotelList/GetAll/${id}`)
      .then((res) => {
        const result = res.data;
        setHotels(result);


      });
  }
  
 
 

  return (
    <div className="hotels">
      {hotel.map((listhotel, i) => (
        
        <div key={i} className="listItem">
          <img
            className="listimg"
            src={`data:image/jpeg;base64,${listhotel.image}`}
            alt=""
          />

          <div className="listDesc">
            <h1 className="listTitle">
              <div className="iconshotel">

                {(() => {
                  let stars = []
                  for (let i = 0; i < listhotel?.star; i++) {
                    stars.push(<i key={i} class="fas fa-star"></i>);
                  }
                  return stars;
                })()}
                
                
                
              </div>

              <Link className="hotelname" to={`/HotelDetail/${listhotel.id}`}>
                {listhotel.name}
              </Link>
            </h1>
            <span><i class="fas fa-location-arrow"></i>      {listhotel.distance}</span>
          
            <span className="listSubTitle">{listhotel.desc}</span>

            
          </div>
          <div className="listDetails">
            <div className="listRating">
              <span>{listhotel.ratingTitle}</span>
              <button>{listhotel.rating}</button>
            </div>
            <div className="listDetailText">
              
              <span className="listPrise">{listhotel.prise}$</span>
              <button className="listCheckButton">
                <Link
                 
                  className="detailto"
                  to={`/HotelDetail/${listhotel.id}`}
                >
                  Detail
                </Link>
              </button>
            </div>

            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;



  //   let rooms = JSON.parse(localStorage.getItem("test"));
  //   let result =rooms.filter(item => item.hotelListId === id);
  //   setResRooms(result);
