import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../../assets/sass/hotels/hotellist.scss";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import StickyBox from "react-sticky-box";
function HotelList() {
  const [hotel, setHotels] = useState([]);
  const { id } = useParams();
  const [search, setSearch] = useState(null);

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

  // const [query, setQuery] = useState("");

  const [visible, sertVisible] = useState(3);
  const showMoreItems = () => {
    sertVisible((prevValue) => prevValue + 3);
  };

  let filterhotels;
  const [starcfs, setStarcfs] = useState(null);

  if (starcfs != null) {
    filterhotels = hotel.filter((m) => m.star === parseInt(starcfs));
  } else {
    filterhotels = hotel;
  }

  if (search !== null) {
    filterhotels = filterhotels.filter((m) =>
      m.name?.toLowerCase().includes(search)
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 filterStar">
          <h4>Filtr:</h4>
          <div className="filterss">
            <Stack spacing={1}>
              <Rating
                name="size-large"
                onChange={(e) => setStarcfs(e.target.value)}
                size="large"
              />
            </Stack>
          </div>
        </div>
        <div className="col-8">
          <div className="hotels">
            <div>
              <input
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Axtar"
                type="text"
                className="searchh form-control"
              />
            </div>

            {filterhotels.slice(0, visible).map((listhotel, i) => (
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
                        let stars = [];
                        for (let i = 0; i < listhotel?.star; i++) {
                          stars.push(<i key={i} class="fas fa-star"></i>);
                        }
                        return stars;
                      })()}
                    </div>

                    <Link
                      className="hotelname"
                      to={`/HotelDetail/${listhotel.id}`}
                    >
                      {listhotel.name}
                    </Link>
                  </h1>
                  <span>
                    <i class="fas fa-location-arrow"></i> {listhotel.distance}
                  </span>

                  <span className="listSubTitle">{listhotel.desc}</span>
                </div>
                <div className="listDetails">
                  <div className="listRating">
                    {/* <span>{listhotel.ratingTitle}</span> */}
                    <button>{listhotel.rating}</button>
                  </div>
                  <div className="listDetailText">
                    <span className="listPrise">
                      Ən ucuz{" "}
                      <button className="btn btn-primary">
                        {listhotel.prise}$
                      </button>
                    </span>
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

            <div>
              <button className="load btn btn-primary" onClick={showMoreItems}>
                Daha çox
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelList;

//   let rooms = JSON.parse(localStorage.getItem("test"));
//   let result =rooms.filter(item => item.hotelListId === id);
//   setResRooms(result);
