import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../../assets/sass/hotels/hotellist.scss";
import { Link } from "react-router-dom";
function HotelList() {
  const [hotel, setHotels] = useState([]);
  const { id } = useParams();

  const [filterText, setFilterText] = useState("");

  const filtered = hotel.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log("filtered", filtered);
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
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="filtered"
      />
      {filtered.map((listhotel, i) => (
        <div key={i} className="listItem">
          <img
            className="listimg"
            src={`data:image/jpeg;base64,${listhotel.image}`}
            alt=""
          />

          <div className="listDesc">
            <h1 className="listTitle">
              <div className="iconshotel">
                <i class="fas fa-star"></i>
              </div>

              <Link to={"/HotelDetail"}>{listhotel.name}</Link>
            </h1>
            <span className="listDistance">{listhotel.distance}</span>
            <span className="listSubTitle">{listhotel.desc}</span>

            <span className="listCancel">Free Cancaled</span>
          </div>
          <div className="listDetails">
            <div className="listRating">
              <span>Excellent</span>
              <button>{listhotel.rating}</button>
            </div>
            <div className="listDetailText">
              <span className="listPrise">{listhotel.prise}$</span>
              <button className="listCheckButton">
                <Link to={"/HotelDetail"}>See availability</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
