import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../../assets/sass/hoteldetail/rooms2.scss";
import RoomDetailCarusel from "./RoomDetailCarusel";

function Rooms2() {
  const [count, setCount] = useState();
  const { id } = useParams();
  const handless = (e) => {
    setCount(e.target.value * room[0].roomPrise);
  };
  
  const [room, setRooms] = useState([]);
  const [resrooms, setResRooms] = useState([]);
  console.log(room.roomPrise);
  let test = [];

  if (JSON.parse(localStorage.getItem("test")) != null) {
    test = JSON.parse(localStorage.getItem("test"));
  }

  useEffect(() => {
    setResRooms(JSON.parse(localStorage.getItem("test")));
    loadRooms();
  }, []);

  async function loadRooms() {
    await axios
      .get(`https://localhost:44363/api/Reservation/GetAll/${id}`)
      .then((res) => {
        const result = res.data;
        setRooms(result);
        console.log(res.data.roomPrise);
      });
  }

  const handle = (x) => {
    let count = 0;
    let result = JSON.parse(localStorage.getItem("test"));
    result.forEach((element) => {
      if (x.id === element.id) {
        count++;
      }
    });
    if (count === 0) {
      test.push(x);
    }
    localStorage.setItem("test", JSON.stringify(test));
    setResRooms(JSON.parse(localStorage.getItem("test")));
  };

  let fullImgs = [];

  async function loadRoom(id) {
    fullImgs.length = 0;
    await axios
      .get(`https://localhost:44363/api/Reservation/GetById/${id}`)
      .then((res) => {
        res.data.roomImages.forEach((image) => {
          let data = "data:image/jpeg;base64,";
          let fullImg = data + image.image;
          let obj = {
            original: fullImg,
            thumbnail: fullImg,
          };

          fullImgs.push(obj);
        });
      });
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-7">
          {room.map((roomss) => (
            <div className="pro">
              <div className="col-5">
                <img
                  className="roomImg"
                  src={`data:image/jpeg;base64,${roomss.image}`}
                  alt=""
                />
              </div>
              <div className="col-4 infoss mt-3">
                <Link
                  className="linkName"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  to={"/"}
                  onClick={() => loadRoom(roomss.id)}
                >
                  {roomss.roomType}
                </Link>
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
                          Otaq Haqqinda etrafli
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
                        <div className="rrr d-flex">
                          <RoomDetailCarusel
                            autoPlay={true}
                            showThumbnails={false}
                            showPlayButton={false}
                            items={fullImgs}
                          ></RoomDetailCarusel>

                          <div className="roomIconss">
                            <h4>2 neferlik standart otaq</h4>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>
                            <i class="fas fa-city"> Seher menzeresi</i>

                            <p>Oda Büyüklüğü 43 m²</p>

                            <p>
                              Park yeri: ​ Yakın bir yerde (rezervasyon gerekli
                              değildir) ücretsiz umuma açık park yeri mevcuttur.
                            </p>
                          </div>
                        </div>
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
                <h6>Sadece {roomss.remained} otaq qalib</h6>
              </div>
              <div className="col-3 prices">
                <b>Otaq seç</b>
                <select onChange={handless}>
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"4"}>4</option>
                </select>
                <p>{roomss.roomPrise} AZN</p>

                <button
                  onClick={() => handle(roomss)}
                  className="btn btn-primary twos"
                >
                  Rezervasiya Et
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-5 sidebasket">
          {resrooms &&
            resrooms.map((e) => {
              return (
                <div className="basketss d-flex">
                  <div className="basketrezz d-flex mt-3">
                    <div className="reserImgs">
                      <img
                        className="basketImg"
                        style={{ width: "140px" }}
                        src={`data:image/jpeg;base64,${e.image}`}
                        alt=""
                      />
                    </div>

                    <p>{e.roomType}</p>
                    <p>{count} AZN</p>
                  </div>
                </div>
              );
            })}

          <Link to="/reservation">
            <button className="btn btn-primary centers">Rezervasiya et</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rooms2;
