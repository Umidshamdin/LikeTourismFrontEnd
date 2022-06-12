import React, { useState } from "react";

import "../../assets/sass/hoteldetail/rooms2.scss";
import HotelDetailImages from "./HotelDetailImages";
import RoomDetailCarusel from "./RoomDetailCarusel";
function Rooms2() {
  const [count, setCount] = useState();

  const handless = (e) => {
    setCount(e.target.value * 300);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-7 roomCard">
          <div className="col-5">
            <img
              className="roomImg"
              src={require("../../assets/img/home/new.jpg")}
              alt=""
            />
          </div>
          <div className="col-4 infoss mt-3">
            {/* <b className="head">Standart tək nəfərlik otaq</b> */}

            <button
              type="button"
              class="btn btn-primary one"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              2 neferlik standart otaq
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {/* <img
                      className="roomDetailImg"
                      src={require("../../assets/img/home/new.jpg")}
                      alt=""
                    /> */}

                    <RoomDetailCarusel></RoomDetailCarusel>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h6>Sadece 13 otaq qalib</h6>

            <div className="iconinfo">
              <ul>
                <li>
                  <button className="btn btn-primary">Minibar</button>
                </li>
                <li>
                  <button className="btn btn-primary">Parking</button>
                </li>
                <li>
                  <button className="btn btn-primary">Parking</button>
                </li>
              </ul>
              <ul>
                <li>
                  <button className="btn btn-primary">Parking</button>
                </li>
                <li>
                  <button className="btn btn-primary">Parking</button>
                </li>
                <li>
                  <button className="btn btn-primary">Parking</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 prices">
            <b>Otaq seç</b>
            <select onChange={handless}>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
            </select>
            <p>{count} AZN</p>
            <button className="btn btn-primary">Rezervasiya Et</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms2;
